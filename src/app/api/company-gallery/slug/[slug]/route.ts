

import { NextRequest, NextResponse } from 'next/server';

import Gallery from '../../../../../../backend/models/company-gallery';
import Company from '../../../../../../backend/models/company';

import dbConnect from '../../../../../../backend/config/dbConnect';



export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  await dbConnect(); // Ensure dbConnect is awaited
  // console.log('slug is ==========>',params.slug)
  const record = await Company.findOne({ slug: params.slug }, { name: true });

  if (record._id) {
    let result = await Gallery.find({ company: record._id })
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ message: "No Record fount" });
  }



}

