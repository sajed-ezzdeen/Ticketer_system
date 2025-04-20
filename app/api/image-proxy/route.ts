import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const imageUrl = req.nextUrl.searchParams.get("url");

  if (!imageUrl) {
    return new Response("Missing image URL", { status: 400 });
  }

  try {
    const imageRes = await fetch(imageUrl);

    if (!imageRes.ok) {
      return new Response("Failed to fetch image", { status: 500 });
    }

    const contentType = imageRes.headers.get("content-type") || "image/jpeg";
    const imageBuffer = await imageRes.arrayBuffer();

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) { 
    console.log("Error fetching image:", error);
    return new Response("Error fetching image", { status: 500 });
  }
}
