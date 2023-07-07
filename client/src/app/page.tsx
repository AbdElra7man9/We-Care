import UpperPart from '@Components/app/upperpart'
import AboutTreatment from '@Components/app/AboutTreatment'
import MedicalService from '@Components/app/MedicalService'
import LastedBlogs from '@Components/app/LastedBlogs'
import Header from '@Components/app/Header'
import Footer from '@Components/app/Footer'
import Chat from '@Components/GPT3.5/Chat'
import TopDoctor from '@Components/app/TopDoctor'

export default function Home() {
  return (
    <div className="dark:bg-slate-900">
      <Header isFull={false} />
      <Chat />
      <UpperPart />
      <AboutTreatment />
      <MedicalService />
      <div className='container px-5 max-w-7xl py-16'>
        <div className='text-center space-y-3'>
          <h3 className='text-2xl font-medium'>Find Your Specialists</h3>
          <p className='text-gray-400 leading-loose'>
            Great doctor if you need your family member to get
            effective immediate assistance, emergency
            <br />
            treatment or a simple consultation.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8'>
          <TopDoctor />
        </div>
      </div>
      <LastedBlogs />
      <Footer />
    </div>
  );
}