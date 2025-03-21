import { ReactNode } from 'react';

export default function AboutUsLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex items-center justify-center h-screen w-full'>{children}</div>
  );
}
