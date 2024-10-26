

import { NextRequest, NextResponse } from 'next/server';

import Contact from '../../../../../backend/models/contact';




export async function DELETE(req: NextRequest, { params }: { params: { id: string } }){

   try{
    const flash = await Contact.findById(params.id);
    await flash?.deleteOne();
    return NextResponse.json({
        success: true,
        message: "Record deleted successfully"
      });
   }catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({
      success: false,
      message: "Failed to delete record"
    }, { status: 500 });
  }
  
  }












