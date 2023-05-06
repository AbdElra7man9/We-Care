import UpperPart from '@Components/app/upperpart'
import AboutTreatment from '@Components/app/AboutTreatment'
import MedicalService from '@Components/app/MedicalService'
import LastedBlogs from '@Components/app/LastedBlogs'
import Header from '@Components/app/Header'
import Footer from '@Components/app/Footer'
import DoctorsList from '@Components/Parts/DoctorsList'
const Doctors = [
  {
    _id: '1',
    ImgSrc: '/Images/Doctors/01.jpg',
    Name: 'Calvin Carlo',
    Spec: 'Eye Care'
  },
  {
    _id: '2',
    ImgSrc: '/Images/Doctors/02.jpg',
    Name: 'Cristino Murphy',
    Spec: 'M.B.B.S, Gynecologist'
  }, {
    _id: '3',
    ImgSrc: '/Images/Doctors/03.jpg',
    Name: 'Alia Reddy',
    Spec: 'M.B.B.S, Psychotherapist'
  }, {
    _id: '4',
    ImgSrc: '/Images/Doctors/04.jpg',
    Name: 'Toni Kovar',
    Spec: 'M.B.B.S, Orthopedic'
  }, {
    _id: '8',
    ImgSrc: '/Images/Doctors/05.jpg',
    Name: 'Jessica McFarlane',
    Spec: 'M.B.B.S, Dentist'
  }, {
    _id: '5',
    ImgSrc: '/Images/Doctors/06.jpg',
    Name: 'Elsie Sherman',
    Spec: 'M.B.B.S, Gastrologist'
  }, {
    _id: '6',
    ImgSrc: '/Images/Doctors/07.jpg',
    Name: 'Bertha Magers',
    Spec: 'M.B.B.S, Urologist'
  }, {
    _id: '7',
    ImgSrc: '/Images/Doctors/08.jpg',
    Name: 'Louis Batey',
    Spec: 'M.B.B.S, Neurologist'
  },
]
export default function Home() {
  return (
    <div className="dark:bg-slate-900">
      <Header isFull={false} />
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
          <DoctorsList Doctors={Doctors} />
        </div>
      </div>
      <LastedBlogs />
      <Footer />
    </div>
  );
}