'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Games } from '@/components/Games';
import { Vibe } from '@/components/Vibe';
import { Menu } from '@/components/Menu';
import { Events } from '@/components/Events';
import { Gallery } from '@/components/Gallery';
import { Booking } from '@/components/Booking';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Games />
      <Vibe />
      <Menu />
      <Events />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
