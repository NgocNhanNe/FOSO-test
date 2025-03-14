import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import { NavigationBar } from '@/components/NavigationBar';

const raleway = Raleway({
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    template: 'FOSO | %S',
    default: 'FOSO'
  },
  description: 'Generated by create next app',
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
      <body className={`${raleway.className}`}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
