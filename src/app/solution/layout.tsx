import { ReactNode } from 'react';

export default function SolutionLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex items-center justify-center h-screen w-full'>{children}</div>
  );
}
