import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang Chủ'
};

export default function Home() {
  return (
    <h1 className='font-bold text-5xl flex items-center justify-center h-screen w-full'>
      Home Page
    </h1>
  );
}
