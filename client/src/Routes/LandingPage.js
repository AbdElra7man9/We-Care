import React from 'react'
import { AboutTreatment, UpperPart, MedicalService, TopDoctors, LastedBlogs, Footer } from '../Components/Exports'

const LandingPage = () => {
  return (
    <div>
      <UpperPart />
      <AboutTreatment />
      <MedicalService />
      <TopDoctors />
      <LastedBlogs />
      <Footer />
    </div>
  )
}

export default LandingPage
