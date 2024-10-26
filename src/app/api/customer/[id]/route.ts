

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import Customer from '../../../../../backend/models/customer';
import dbConnect from '../../../../../backend/config/dbConnect';
import path from 'path';
import fs from 'fs/promises'
import { uploadFile } from '../../../../../backend/utils/cloudinary';





export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect(); // await the database connection

    const company = await Customer.findById(params.id);
    if (!company) {
      return NextResponse.json({ success: false, message: "Customer not found" }, { status: 404 });
    }
    // Delete the company from the database
    await company?.deleteOne();

    // Delete the associated image file
    const companyDir = path.join(process.cwd(), 'public', 'images', company.customer_img);
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
  dbConnect()
  let record = await Customer.findById(params.id);

  return NextResponse.json(
    record,
  )
}





export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const formData = await req.formData();

    // console.log('form data is ====>',   formData)

    // Get file from form data (optional)
    const file = formData.get('file') as unknown as File | null;

    // Find the existing aboutBrief record
    const record = await Customer.findById(params.id);
    if (!record) {
      return NextResponse.json({ success: false, message: 'aboutBrief not found.' }, { status: 404 });
    }

    let customer_img = ""
    if (file?.name) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const result = await uploadFile(buffer, "punam/gallery");
      customer_img = (result as any).secure_url;
    } else {
      customer_img = record.customer_img
    }


    

    const heading = formData.get('heading') as string;
    const description = formData.get('description') as string;

    // Update the company with the new data
    const updatedCustomer = await Customer.findByIdAndUpdate(
      params.id,
      { $set: { heading, description, customer_img } },
      { new: true }
    );

    return NextResponse.json({ success: true, message: 'Customer Updated Successfully', updatedCustomer });
  } catch (error) {
    console.log("Error occurred:", error);
    return NextResponse.json({ success: false, message: "Error occurred" });
  }
}




