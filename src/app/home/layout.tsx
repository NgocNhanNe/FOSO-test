import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trang Chủ'
};

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex items-center justify-center h-screen w-full'>{children}</div>
  );
}
