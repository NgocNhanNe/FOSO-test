import { use } from 'react';

export default function SolutionDetail({ params }: { params: Promise<{ id: number }> }) {
  const { id } = use(params);
  return <h1 className='font-bold text-5xl'>Solution {id}</h1>;
}
