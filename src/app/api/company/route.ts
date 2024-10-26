

import { NextRequest, NextResponse } from "next/server";

import Company from '../../../../backend/models/company';
import dbConnect from "../../../../backend/config/dbConnect";
import slugify from "slugify";
import { uploadFile } from "../../../../backend/utils/cloudinary";


export const POST = async (req: NextRequest) => {
  await dbConnect();
  const formData = await req.formData();

  const file: File | null = formData.get('file') as unknown as File

  if (!file) {
    return NextResponse.json({ error: "No file received." }, { status: 400 });
  }


  try {


    const buffer = Buffer.from(await file.arrayBuffer());

    // Use the reusable upload function
    const result = await uploadFile(buffer, "punam/gallery");
    const company_img = (result as any).secure_url;


    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const metaTitle = formData.get('metaTitle') as string;
    const metaDesc = formData.get('metaDesc') as string;
    const metaKeyword = formData.get('metaKeyword') as string;
    const slug = slugify(name);

    // Check if the company name already exists
    const existingCompany = await Company.findOne({ name });
    if (existingCompany) {
      return NextResponse.json({ success: false, message: 'Company with this name already exists' }, { status: 409 }); // 409 Conflict
    }

    await Company.create({
      name,
      description,
      company_img,
      metaTitle,
      metaDesc,
      metaKeyword,
      slug
    });

    return NextResponse.json({ success: true, message: 'Company added successfully' });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ success: false, message: 'Failed to add company' }, { status: 500 });
  }
};


export const GET = async (request: NextRequest) => {
  await dbConnect(); // Ensure dbConnect is awaited to complete the connection
  try {
    const list = await Company.find();
    return NextResponse.json(list);
  } catch (error) {
    console.error("Error occurred while fetching companies:", error);
    return NextResponse.json({ success: false, message: 'Failed to fetch companies' }, { status: 500 });
  }
};
