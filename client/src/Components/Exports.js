
////////////////////////Routes/////////////////////////////
export { default as SignIn } from '../Routes/SignIn';
export { default as SignUp } from '../Routes/SignUp';
export { default as DoctorSignUp } from '../Routes/DoctorSignUp';
export { default as ForgetPassword } from '../Routes/ForgetPassword';
export { default as ResetPassword } from '../Routes/ResetPassword';
export { default as ConfirmEmail } from '../Routes/ConfirmEmail';
export { default as LandingPage } from '../Routes/LandingPage';
export { default as Profile } from '../Routes/Profile';
export { default as DoctorDash } from '../Routes/DoctorDash';
/////////////////////////Home///////////////////////////////
export { default as Header } from './Home/LandingPage/Header';
export { default as UpperPart } from './Home/LandingPage/UpperPart';
export { default as AboutTreatment } from './Home/LandingPage/AboutTreatment';
export { default as MedicalService } from './Home/LandingPage/MedicalService';
export { default as TopDoctors } from './Home/LandingPage/TopDoctors';
export { default as LastedBlogs } from './Home/LandingPage/LastedBlogs';
export { default as Footer } from './Home/LandingPage/Footer';
export { default as LoadingScreen } from '../Components/Layouts/LoadingScreen';

////////////////////////Book Appointment/////////////////////
export { default as MainAppintment } from '../Components/Home/BookAppointment/MainAppintment';
export { default as ClincAppointment } from '../Components/Home/BookAppointment/ClincAppointment';
export { default as OnlineAppointment } from '../Components/Home/BookAppointment/OnlineAppointment';


export { default as Emoji } from '../Components/Layouts/Emoji';
export { default as Pagination } from '../Components/Layouts/Pagination';

////////////////////////Utils/////////////////////////////
export { default as RequireAuth } from '../utils/RequiredAuth';
export { default as PersistLogin } from '../utils/PersistLogin';
export { default as SocketConnect } from '../utils/SocketConnect';
export { default as Layout } from '../utils/Layout';

////////////////////////Hooks/////////////////////////////
export { default as useBreakpoint } from '../Hooks/useBreakpoint';
export { default as usePersist } from '../Hooks/usePersist';
export { default as useAuth } from '../Hooks/useAuth';
export { default as useTitle } from '../Hooks/useTitle';
export { default as useSocket } from '../Hooks/useSocket';


////////////////////////Patient/////////////////////////////
export { default as PatientDash } from '../Routes/PatientDash';
export { default as PatientMain } from '../Components/Dashboard/Patient/Screens/PatientMain';
export { default as PatientPage } from '../Components/Dashboard/Patient/Screens/PatientPage';
export { default as SidePatient } from '../Components/Dashboard/Patient/Layouts/SidePatient';
//Graphs
export { default as DonutPlot } from '../Components/Dashboard/Patient/Layouts/Graphs/DonutPlot';
export { default as AreaPlot } from '../Components/Dashboard/Patient/Layouts/Graphs/AreaPlot';

//Profile
export { default as AppointmentsList } from '../Components/Dashboard/Patient/Layouts/Profile/AppointmentsList';
export { default as PaymentsList } from '../Components/Dashboard/Patient/Layouts/Profile/PaymentsList';
export { default as Contact } from '../Components/Dashboard/Patient/Layouts/Profile/Contact';
export { default as ProfileSettings } from '../Components/Dashboard/Patient/Layouts/Profile/ProfileSettings';

export { default as MonthlyReports } from '../Components/Dashboard/Patient/Layouts/MonthlyReports';

//Graphs
export { default as HeartbeatChart } from './Dashboard/Patient/Layouts/GridCharts/HeartbeatChart';
export { default as WaterChart } from './Dashboard/Patient/Layouts/GridCharts/WaterChart';
export { default as HemoglobinChart } from './Dashboard/Patient/Layouts/GridCharts/HemoglobinChart';
export { default as SugarChart } from './Dashboard/Patient/Layouts/GridCharts/SugarChart';








////////////////////////Doctor/////////////////////////////
export { default as SideBar } from '../Components/Dashboard/Doctor/Layouts/SideBar';
export { default as HeaderDoc } from '../Components/Dashboard/Doctor/Layouts/HeaderDoc';
//Graphs
export { default as ColumnChart } from '../Components/Dashboard/Doctor/Layouts/Graphs/ColumnChart';
export { default as SplineChart } from '../Components/Dashboard/Doctor/Layouts/Graphs/SplineChart';
export { default as Calender } from '../Components/Dashboard/Doctor/Layouts/Graphs/Calender';

export { default as CanceledChart } from './Dashboard/Doctor/Layouts/GridCharts/CanceledChart';
export { default as AppointmentChart } from './Dashboard/Doctor/Layouts/GridCharts/AppointmentChart';
export { default as PatientsChart } from './Dashboard/Doctor/Layouts/GridCharts/PatientsChart';
export { default as UrgentChart } from './Dashboard/Doctor/Layouts/GridCharts/UrgentChart';
//OverFlow
export { default as CardDetails } from '../Components/Dashboard/Doctor/Layouts/OverFlow/CardDetails';
export { default as RightPartOverFlow } from '../Components/Dashboard/Doctor/Layouts/OverFlow/RightPartOverFlow';

//Messages
export { default as PatientCart } from '../Components/Dashboard/Doctor/Layouts/Messsges/PatientCart';
export { default as Conversation } from '../Components/Dashboard/Doctor/Layouts/Messsges/Conversation';
export { default as Message } from '../Components/Dashboard/Doctor/Layouts/Messsges/Message';

//Screens at Doctor
export { default as OverFlow } from '../Components/Dashboard/Doctor/Screens/OverFlow';
export { default as Appointments } from '../Components/Dashboard/Doctor/Screens/Appointments';
export { default as CalenderScreen } from '../Components/Dashboard/Doctor/Screens/CalenderScreen';
export { default as PatientList } from '../Components/Dashboard/Doctor/Screens/PatientList';
export { default as Messages } from '../Components/Dashboard/Doctor/Screens/Messages';
export { default as Payment } from '../Components/Dashboard/Doctor/Screens/Payment';

