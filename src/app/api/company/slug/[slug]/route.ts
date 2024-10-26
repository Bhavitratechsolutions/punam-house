

import { NextRequest, NextResponse } from 'next/server';
import CompanyBanner from '../../../../../../backend/models/company-banner';
import Company from '../../../../../../backend/models/company';

import dbConnect from '../../../../../../backend/config/dbConnect';









export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  await dbConnect(); // Ensure dbConnect is awaited
// console.log('slug is ==========>',params.slug)
const record = await Company.findOne({slug:params.slug},{ metaTitle: true,metaDesc: true,metaKeyword: true });
// const record = await Company.findOne({slug:params.slug});

    return NextResponse.json(record);



  
}

