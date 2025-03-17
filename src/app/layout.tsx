import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { NavigationBar } from '@/components/NavigationBar';

const raleway = Raleway({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    template: 'FOSO | %s',
    default: 'FOSO'
  },
  description: 'Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!',
  icons: '../../public/logo.svg'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/svg+xml'
          href='/logo.svg'
        />
      </head>
      <body className={`${raleway.className} `}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
