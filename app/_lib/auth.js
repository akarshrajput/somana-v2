import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Facebook from "next-auth/providers/facebook";
import { createUser, getUser, checkUsernameExists } from "./services";

const generateUniqueUsername = async (name) => {
  let baseUsername = name.toLowerCase().replace(/\s+/g, "");
  let uniqueUsername = baseUsername;
  let count = 1;

  // Check if the username exists, and modify it if necessary
  while (await checkUsernameExists(uniqueUsername)) {
    uniqueUsername = `${baseUsername}${count}`;
    count++;
  }
  return uniqueUsername;
};

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getUser(user.email);
        if (!existingUser) {
          const uniqueUsername = await generateUniqueUsername(user.name);
          await createUser({
            email: user.email,
            name: user.name,
            username: uniqueUsername, // Save the unique username
            photo: user.image,
          });
        }
        return true;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      const guest = await getUser(session.user.email);
      session.user.userId = guest._id;
      session.user.photo = guest.photo;
      session.user.username = guest.username; // Add username to session
    },
  },
  pages: {
    SignIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
