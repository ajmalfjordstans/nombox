import Image from 'next/image'
import Hero from './hero'
import Dishes from './daily-dishes';
import Meals from './subscription-meals';
import Chef from './chefs-near';
import About from './about';
import HowItWorks from './how-it-works';
import TestimonialSection from './testimonial';
import SignUp from './signup';
import DownloadApp from './download-app';
import { StickyNavbar } from '@/components/header';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className=''>
      <StickyNavbar/>
      <Hero />
      <Dishes />
      <Meals />
      <Chef />
      <About />
      <HowItWorks />
      <TestimonialSection />
      <SignUp />
      <DownloadApp />
      <Footer/>
    </div>
  );
}
