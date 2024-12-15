
import NavBar from './NavBar';
import { ReactNode } from 'react';
import './globals.css';
import React from 'react';

export const metadata = {
  title: "Lin's store",
  description: "Welcome to my store",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
