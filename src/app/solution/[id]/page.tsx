import { use } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giải pháp'
};

export default function SolutionDetail({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);
  return <h1 className='font-bold text-5xl'>Solution {id}</h1>;
}
