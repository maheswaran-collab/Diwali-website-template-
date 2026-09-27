import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Deepawali 2026 - Festival of Lights | Wishes, Virtual Diyas & Celebrations',
  description: 'Grand digital Diwali celebration web application featuring virtual diya lighting wall, eco-friendly digital fireworks simulator, personalized greeting card studio, Lakshmi Pooja Vidhi guide, and sweets hampers.',
  keywords: ['Diwali', 'Deepawali', 'Festival of Lights', 'Virtual Diya', 'Digital Fireworks', 'Diwali Wishes', 'Lakshmi Pooja Vidhi', 'Diwali Sweets'],
  authors: [{ name: 'Deepawali Devotee Team' }],
  openGraph: {
    title: 'Deepawali 2026 - Festival of Lights',
    description: 'Light virtual diyas, send golden greetings, and celebrate Deepawali online!',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-diwali-dark text-slate-100 min-h-screen relative selection:bg-amber-500 selection:text-diwali-dark">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
