import UpperPart from '@Components/app/upperpart'
import AboutTreatment from '@Components/app/AboutTreatment'
import MedicalService from '@Components/app/MedicalService'
import LastedBlogs from '@Components/app/LastedBlogs'
import TopDoctors from '@Components/app/TopDoctors'
import Header from '@Components/app/Header'
import Footer from '@Components/app/Footer'
export default function Home() {
  return (
    <div className="dark:bg-slate-900">
      <Header />
      <UpperPart />
      <AboutTreatment />
      <MedicalService />
      <TopDoctors /> 
      <LastedBlogs />
      <Footer />
    </div>
  );
}