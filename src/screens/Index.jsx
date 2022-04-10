import React from 'react'
import Hero from '../components/Hero/Hero'
import Header from '../components/Header/Header'
import Why from '../components/Why/Why'
import TrackRecord from '../components/TrackRecord/TrackRecord'
import SchoolPrograms from '../components/SchoolPrograms/SchoolPrograms'

const Index = () => {
  return (
    <section>
        <Header/>
        <Hero/>
        <Why/>
        <TrackRecord/>
        <SchoolPrograms/>
    </section>
  )
}

export default Index