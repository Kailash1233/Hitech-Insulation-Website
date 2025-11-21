import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hitech Insulation - Electrical Insulation Manufacturer Chennai | Transformer Materials India',
  description: 'Leading electrical insulation manufacturer in Chennai since 1977. Supplier of pressboard, epoxy sheets, phenolic laminates, PTFE products for transformer, motor & switchgear industries across India.',
  keywords: 'electrical insulation manufacturer, transformer insulation materials, insulation pressboard, epoxy fiberglass sheets, phenolic laminates, Chennai insulation supplier, electrical grade kraft paper, PTFE insulation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
