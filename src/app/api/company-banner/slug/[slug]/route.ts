

import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir, unlink } from 'fs/promises';
import CompanyBanner from '../../../../../../backend/models/company-banner';
import Company from '../../../../../../backend/models/company';

import dbConnect from '../../../../../../backend/config/dbConnect';
import path from 'path';
import fs from 'fs/promises'








export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  await dbConnect(); // Ensure dbConnect is awaited
// console.log('slug is ==========>',params.slug)
const record = await Company.findOne({slug:params.slug},{ name: true });

if(record._id){
   let result = await CompanyBanner.findOne({company:record._id})
    return NextResponse.json(result);
}else{
    return NextResponse.json({message:"No Record fount"});
}


  
}

