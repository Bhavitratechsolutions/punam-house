



import { NextRequest, NextResponse } from 'next/server';
import { writeFile, unlink } from 'fs/promises';
import Company from '../../../../../backend/models/company';
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';
import fs from 'fs/promises';
import slugify from 'slugify';
import { uploadFile } from '../../../../../backend/utils/cloudinary';



export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect(); // Await the database connection

    const company = await Company.findById(params.id);
    if (!company) {
      return NextResponse.json({ success: false, message: "Company not found" }, { status: 404 });
    }

    // Delete the company from the database
    await company.deleteOne();

    // Delete the associated image file
    const companyDir = path.join(process.cwd(), 'public', 'images', company.company_img);
    try {
      await fs.unlink(companyDir); // Delete image from file system
    } catch (err) {
      console.error('Error deleting image:', err);
    }

    return NextResponse.json({
      success: true,
      message: "Record deleted successfully"
    });
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({
      success: false,
      message: "Failed to delete record"
    }, { status: 500 });
  }
}

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect(); // Await the database connection
  const record = await Company.findById(params.id);

  return NextResponse.json(record);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();
   
    
      // Get file from form data (optional)
      const file = formData.get('file') as unknown as File | null;

      // Find the existing aboutBrief record
      const record = await Company.findById(params.id);
      if (!record) {
        return NextResponse.json({ success: false, message: 'No records found.' }, { status: 404 });
      }
  
      let company_img = ""
      if (file?.name) {
        const buffer = Buffer.from(await file.arrayBuffer());
  
        const result = await uploadFile(buffer, "punam/gallery");
        company_img = (result as any).secure_url;
      } else {
        company_img = record.company_img
      }



    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const metaTitle = formData.get('metaTitle') as string;
    const metaDesc = formData.get('metaDesc') as string;
    const metaKeyword = formData.get('metaKeyword') as string;

    // Create a unique slug based on the name
   

    // const existingCompany = await Company.findOne({ name });
    // if (existingCompany) {
    //   return NextResponse.json({ success: false, message: 'Company with this name already exists' }, { status: 409 }); // 409 Conflict
    // }

    // Update the company with the new data
    const updatedCompany = await Company.findByIdAndUpdate(
      params.id,
      { $set: { name, description,metaTitle,metaDesc,metaKeyword, company_img } },
      { new: true }
    );

    return NextResponse.json({ success: true, message: 'Company Updated Successfully', updatedCompany });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ success: false, message: "Error occurred" }, { status: 500 });
  }
}

