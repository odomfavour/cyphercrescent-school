import React from 'react'
import Hero from '../components/Hero/Hero'
import Why from '../components/Why/Why'
import TrackRecord from '../components/TrackRecord/TrackRecord'
import SchoolPrograms from '../components/SchoolPrograms/SchoolPrograms'
import LearningScheme from '../components/LearningScheme/LearningScheme'
import Testimonials from '../components/Testimonials/Testimonials'
import News from '../components/News/News'
import PageWrapper from '../layout/PageWrapper/PageWrapper'

const Index = () => {
  return (
    <PageWrapper>
      <section>
        <Hero />
        <Why />
        <TrackRecord />
        <SchoolPrograms />
        <LearningScheme />
        <Testimonials />
        <News />
      </section>
    </PageWrapper>
  )
}

export default Index