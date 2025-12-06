import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    // Only handle multipart/form-data (FormData from the client)
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 400 }
      );
    }

    const formData = await request.formData();
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const linkedin = formData.get("linkedin")?.toString() || "";
    const message = formData.get("message")?.toString() || "";
    const role = formData.get("role")?.toString() || "";

    // Handle optional file
    const resume = formData.get("resume") as File | null;

    // If a file was provided, persist it to /tmp/uploads (Node file system not available on Edge runtime)
    // For the Edge runtime we cannot use fs; so we'll just validate presence and return metadata.
    const fileInfo = resume
      ? { name: resume.name, size: resume.size, type: resume.type }
      : null;

    // Here you would normally forward the form data to an email service, database, or storage bucket.

    return NextResponse.json(
      {
        success: true,
        data: { name, email, linkedin, message, role, file: fileInfo },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message || "Unknown error" },
      { status: 500 }
    );
  }
}
