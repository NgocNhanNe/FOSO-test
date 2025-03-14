import { blogs } from '@/app/_lib/data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const blogId = parseInt(id, 10);

  const blog = blogs.find(b => b.id === blogId);

  if (!blog) {
    return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json(blog);
}
