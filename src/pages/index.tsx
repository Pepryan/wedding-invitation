import type { NextPage } from 'next';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import CoupleProfile from '@/components/sections/CoupleProfile';
import StoryTimeline from '@/components/sections/StoryTimeline';
import EventDetails from '@/components/sections/EventDetails';
import Gallery from '@/components/sections/Gallery';
import DigitalEnvelope from '@/components/sections/DigitalEnvelope';
import GuestBook from '@/components/sections/GuestBook';
import RSVP from '@/components/sections/RSVP';
import LiveStreaming from '@/components/sections/LiveStreaming';
// import ShareButton from '@/components/features/ShareButton';
import GiftRegistry from '@/components/sections/GiftRegistry';
import { ThemeProvider } from '@/contexts/ThemeContext';
import CountdownTimer from '@/components/features/CountdownTimer';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  const [guestName, setGuestName] = useState<string>('');

  useEffect(() => {
    if (router.isReady) {
      // Get the 'to' parameter from URL and decode it
      const guest = router.query.to;
      if (typeof guest === 'string') {
        setGuestName(decodeURIComponent(guest));
      }
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider>
      <MainLayout guestName={guestName}>
        <Hero guestName={guestName} />
        <CoupleProfile />
        <CountdownTimer />
        <EventDetails />
        <StoryTimeline />
        <Gallery />
        <LiveStreaming />
        <DigitalEnvelope />
        <GuestBook />
        <RSVP guestName={guestName} />
        <GiftRegistry />
      </MainLayout>
    </ThemeProvider>
  );
};

export default Home;
