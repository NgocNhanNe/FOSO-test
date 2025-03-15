import { blogs } from '@/app/_lib/data';
import BlogDetail from './BlogDetail';

export async function generateMetadata({ params }: { params: { id: number } }) {
  const { id } = await params;

  let title = 'Blog';

  const blog = blogs.find(blog => blog.id == id);

  if (blog) title = blog.title;

  return {
    title: `Blog | ${title}`
  };
}
export default function BlogDetailPage({ params }: { params: Promise<{ id: number }> }) {
  return <BlogDetail params={params}></BlogDetail>;
}
