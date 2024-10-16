import { getIpAddress } from "@/app/_lib/getIpAddress";
import connectMongoDB from "@/app/_lib/mongodb";
import Blog from "@/app/_models/blogModel";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();

    const url = new URL(request.url);
    const slug = url.pathname.split("blogs/slug/")[1];
    const userId = url.searchParams.get("userId");
    const action = url.searchParams.get("action");

    const blog = await Blog.findOne({ slug: slug });
    if (!blog) {
      return NextResponse.json(
        { status: "error", message: `Blog not found with slug ${slug}` },
        { status: 404 }
      );
    }

    if (userId) {
      if (!blog.views.includes(userId)) {
        blog.views.push(userId);
        await blog.save();
      }
    }

    // Handle like action (only if userId is present)
    if (action === "like" && userId) {
      if (blog.likes.includes(userId)) {
        blog.likes.pull(userId); // Unlike if already liked
      } else {
        blog.likes.push(userId); // Like if not already liked
      }
      await blog.save();
    }

    return NextResponse.json(
      { status: "success", message: "Blog found successfully", data: blog },
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { status: "error", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
