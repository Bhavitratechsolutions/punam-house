import { NextRequest, NextResponse } from 'next/server';
import Seo from '../../../../../backend/models/seo';
import dbConnect from '../../../../../backend/config/dbConnect';


dbConnect()
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

  const section = await Seo.findById(params.id);
  await section?.deleteOne();
  return NextResponse.json({
    success: true,
    message: "record Deleted Successfully"
  })

}




export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const updatedSeoData = {
      title: body.title,
      description: body.description,
      keywords: body.keywords, // Ensure keywords are properly passed as an array
    };

    const section = await Seo.findByIdAndUpdate(params.id, updatedSeoData, {
      new: true, // Return the updated document
      runValidators: true, // Ensure validation is run
    });

    if (!section) {
      return NextResponse.json(
        { success: false, message: 'Record not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, section });
  } catch (error) {
    console.error('Update failed:', error);
    return NextResponse.json(
      { success: false, message: 'Update failed', error },
      { status: 500 }
    );
  }
}



