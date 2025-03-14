import { Metadata } from 'next';
import Blog from './Blog';

export const metadata: Metadata = {
  title: 'Blog'
};

export default function BlogPage({
  searchParams
}: {
  searchParams: Promise<{ page: number; category: string; title: string }>;
}) {
  return <Blog searchParams={searchParams} />;
}
