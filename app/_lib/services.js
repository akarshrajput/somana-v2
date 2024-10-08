import User from "../_models/userModel";
import connectMongoDB from "./mongodb";

export async function getUser(email) {
  try {
    await connectMongoDB();
    const user = await User.findOne({ email: email });
    return user ? user : null;
  } catch (err) {
    console.error("Error getting user:", err);
    throw new Error("Error getting user");
  }
}

export async function createUser(data) {
  try {
    await connectMongoDB();
    const newUser = await User.create(data);
    return {
      statusText: "success",
      message: "User created successfully",
      data: newUser,
    };
  } catch (err) {
    console.error("Error creating user:", err);
    return {
      statusText: "error",
      message: "Error creating user",
      error: err.message,
    };
  }
}

export async function checkUsernameExists(username) {
  try {
    await connectMongoDB();
    const user = await User.findOne({ username: username });
    return user ? true : false;
  } catch (err) {
    console.error("Error checking username:", err);
    throw new Error("Error checking username");
  }
}
