import connectMongoDB from "@/app/_lib/mongodb";
import Blog from "@/app/_models/blogModel";
import APIFeatures from "@/app/_utils/apiFeatures";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectMongoDB();
    const url = new URL(request.url);
    const query = Object.fromEntries(url.searchParams.entries());

    // Apply filtering, sorting, limiting, and pagination
    const features = new APIFeatures(
      Blog.find().select(
        "-content -description -featuredImage -collectedImages -tags -genre -author -numberOfViews -numberOfLikes -views -likes -usedAI"
      ),
      query
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();

    // Fetch blogs using the modified query
    const blogs = await features.query;

    return NextResponse.json(
      {
        statusText: "success",
        message: "Blogs fetched successfully",
        results: blogs.length,
        data: {
          blogs,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching blogs:", err);

    return NextResponse.json(
      {
        statusText: "error",
        message: "Error getting blogs",
        error: err.message,
      },
      { status: 500 }
    );
  }
}
