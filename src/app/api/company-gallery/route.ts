

import { NextRequest, NextResponse } from "next/server";
import { uploadFile } from "../../../../backend/utils/cloudinary";
import dbConnect from "../../../../backend/config/dbConnect";
import Gallery from "../../../../backend/models/company-gallery";


export async function GET() {

  await dbConnect();

  const list = await Gallery.find({}).populate({
    path: 'company', // Ensure 'company' is the correct field in the CompanyBanner schema
    select: 'name' // Only select the 'name' field from the Company model
  });

  // Return the populated banners as a JSON response
  return NextResponse.json(list);


}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const formData = await req.formData();
    const file: File | null = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Use the reusable upload function
    const result = await uploadFile(buffer, "punam/gallery");
    const gallery_img = (result as any).secure_url;

    // Extract additional form data
    const company = formData.get("company");
    const title = formData.get("title");
    const description = formData.get("description");

    // Save gallery entry to the database
    await Gallery.create({ company, title, description, gallery_img });

    return NextResponse.json({
      success: true,
      message: "Gallery Added Successfully",
    });
  } catch (error: any) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}



