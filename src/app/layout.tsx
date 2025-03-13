import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { NavigationBar } from '@/components/NavigationBar';

const raleway = Raleway({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${raleway.className}`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
