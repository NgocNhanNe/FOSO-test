import { blogs } from '@/app/_lib/data';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const limit = parseInt(url.searchParams.get('limit') || '10', 10);
  const page = parseInt(url.searchParams.get('page') || '1', 10);
  const title = url.searchParams.get('title');

  let filteredBlogs = blogs;

  if (category)
    filteredBlogs = filteredBlogs.filter(blog => blog.category.name === category);

  if (title)
    filteredBlogs = filteredBlogs.filter(blog =>
      blog.title.toLowerCase().includes(title.toLowerCase())
    );

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedBlogs = filteredBlogs.slice(start, end);

  return NextResponse.json({
    blogs: paginatedBlogs,
    total: filteredBlogs.length,
    page,
    limit
  });
}
