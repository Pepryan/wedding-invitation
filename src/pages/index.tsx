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
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <MainLayout>
      <Hero />
      <CoupleProfile />
      <StoryTimeline />
      <EventDetails />
      <Gallery />
      <LiveStreaming />
      <DigitalEnvelope />
      <GuestBook />
      <RSVP />
      <GiftRegistry />
      {/* <ShareButton /> */}
    </MainLayout>
  );
};

export default Home;
