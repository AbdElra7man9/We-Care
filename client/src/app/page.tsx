import UpperPart from '@Components/app/upperpart'
import AboutTreatment from '@Components/app/AboutTreatment'
import MedicalService from '@Components/app/MedicalService'
import LastedBlogs from '@Components/app/LastedBlogs'
import TopDoctors from '@Components/app/TopDoctors'
export default function Home() {
  return (
    <div className="dark:bg-slate-900">
      <UpperPart />
      <AboutTreatment />
      <MedicalService />
      <TopDoctors /> 
      <LastedBlogs />
    </div>
  );
}
