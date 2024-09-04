import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb';
import connectMongoDB from "@/lib/db";
import convertToLink from "@/helpers/trimSpace";
import Blog from "@/models/blog.model";


export async function PATCH(request, { params }) {
  const { slug } = params;

  const updateField = await request.json();

  const { customLink } = updateField;

  const id = slug;

  convertToLink(customLink)
  await connectMongoDB();

  const data = await Blog.findByIdAndUpdate(id,
    {
      ...updateField,
    }, { new: true }
  );
  return NextResponse.json(
    { message: "Request success", data },
    { status: 200 }
  );
}




export async function GET(request, { params }) {
  try {
    const { slug } = params;

    if (!slug || typeof slug !== 'string') {
      throw new Error('Invalid slug parameter');
    }

    await connectMongoDB();

    let data;

    if (ObjectId.isValid(slug)) {
      data = await Blog.findOne({ '_id': new ObjectId(slug) });
    } else {
      data = await Blog.findOne({ 'customLink': slug });
    }

    if (!data) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Request success", data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

