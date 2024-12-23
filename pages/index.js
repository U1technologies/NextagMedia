import React from 'react'
import { HOME_PAGE } from '@/text'
import Hero from '@/components/HomePage/Hero'
import Achievements from '@/components/OurExpertise'
import WorkingWith from '@/components/proudlyWorkingWith/WorkingWith'
import Testimonial from '@/components/Testimonial/Testimonial'
import AboutCompany from '@/components/HomepageAbout'
import OurServices from '@/components/HomepageServices'
import PortfolioSection from '@/components/SuccessStories'

export default function Home() {
  let { TESTIMONIALS } = HOME_PAGE
  const { OUR_PARTNERS } =  HOME_PAGE

  return (
    <div>
      <Hero />
      <OurServices />
      <Achievements />
      <AboutCompany />
      <PortfolioSection />
      <WorkingWith data={OUR_PARTNERS} />
      <Testimonial />
    </div>
  )
}
