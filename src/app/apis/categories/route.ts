import { blogCards } from '@/app/_lib/data';
import { CategoryCount } from '@/app/_lib/types';
import { NextResponse } from 'next/server';

export async function GET() {
  const categoryCount = blogCards.reduce((acc, blog) => {
    acc[blog.category.name] = (acc[blog.category.name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories: CategoryCount[] = Object.entries(categoryCount).map(
    ([categoryName, count]) => ({
      categoryName,
      count
    })
  );

  return NextResponse.json({
    categories
  });
}
