
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
export { default as AdminDash } from '../Routes/AdminDash';
/////////////////////////Home///////////////////////////////
export { default as Header } from './Home/LandingPage/Header';
export { default as UpperPart } from './Home/LandingPage/UpperPart';
export { default as AboutTreatment } from './Home/LandingPage/AboutTreatment';
export { default as MedicalService } from './Home/LandingPage/MedicalService';
export { default as TopDoctors } from './Home/LandingPage/TopDoctors';
export { default as LastedBlogs } from './Home/LandingPage/LastedBlogs';
export { default as Footer } from './Home/LandingPage/Footer';
export { default as LoadingScreen } from './Layouts/LoadingScreen';

////////////////////////Book Appointment/////////////////////
export { default as MainAppintment } from './Home/BookAppointment/MainAppintment';
export { default as ClincAppointment } from './Home/BookAppointment/ClincAppointment';
export { default as OnlineAppointment } from './Home/BookAppointment/OnlineAppointment';


export { default as Emoji } from './Layouts/Emoji';
export { default as Pagination } from './Layouts/Pagination';

////////////////////////Utils/////////////////////////////
export { default as RequireAuth } from '../utils/RequiredAuth';
export { default as PersistLogin } from '../utils/PersistLogin';
export { default as Layout } from '../utils/Layout';

////////////////////////Hooks/////////////////////////////
export { default as useBreakpoint } from '../Hooks/useBreakpoint';
export { default as usePersist } from '../Hooks/usePersist';
export { default as useAuth } from '../Hooks/useAuth';
export { default as useTitle } from '../Hooks/useTitle';
export { default as useSocket } from '../Hooks/useSocket';


////////////////////////Patient/////////////////////////////
export { default as PatientDash } from '../Routes/PatientDash';
export { default as PatientMain } from './Dashboard/Patient/Screens/PatientMain';
export { default as PatientPage } from './Dashboard/Patient/Screens/PatientPage';
export { default as SidePatient } from './Dashboard/Patient/Layouts/SidePatient';
//Graphs
export { default as DonutPlot } from './Dashboard/Patient/Layouts/Graphs/DonutPlot';
export { default as AreaPlot } from './Dashboard/Patient/Layouts/Graphs/AreaPlot';

//Profile
export { default as AppointmentsList } from './Dashboard/Patient/Layouts/Profile/AppointmentsList';
export { default as PaymentsList } from './Dashboard/Patient/Layouts/Profile/PaymentsList';
export { default as Contact } from './Dashboard/Patient/Layouts/Profile/Contact';
export { default as ProfileSettings } from './Dashboard/Patient/Layouts/Profile/ProfileSettings';

export { default as MonthlyReports } from './Dashboard/Patient/Layouts/MonthlyReports';

//Graphs
export { default as HeartbeatChart } from './Dashboard/Patient/Layouts/GridCharts/HeartbeatChart';
export { default as WaterChart } from './Dashboard/Patient/Layouts/GridCharts/WaterChart';
export { default as HemoglobinChart } from './Dashboard/Patient/Layouts/GridCharts/HemoglobinChart';
export { default as SugarChart } from './Dashboard/Patient/Layouts/GridCharts/SugarChart';








////////////////////////Doctor/////////////////////////////
export { default as SideBar } from './Dashboard/Doctor/Layouts/SideBar';
export { default as HeaderDoc } from './Dashboard/Doctor/Layouts/HeaderDoc';
//Graphs
export { default as ColumnChart } from './Dashboard/Doctor/Layouts/Graphs/ColumnChart';
export { default as SplineChart } from './Dashboard/Doctor/Layouts/Graphs/SplineChart';
export { default as Calender } from './Dashboard/Doctor/Layouts/Graphs/Calender';

export { default as CanceledChart } from './Dashboard/Doctor/Layouts/GridCharts/CanceledChart';
export { default as AppointmentChart } from './Dashboard/Doctor/Layouts/GridCharts/AppointmentChart';
export { default as PatientsChart } from './Dashboard/Doctor/Layouts/GridCharts/PatientsChart';
export { default as UrgentChart } from './Dashboard/Doctor/Layouts/GridCharts/UrgentChart';
//OverFlow
export { default as CardDetails } from './Dashboard/Doctor/Layouts/OverFlow/CardDetails';
export { default as RightPartOverFlow } from './Dashboard/Doctor/Layouts/OverFlow/RightPartOverFlow';

//Messages
export { default as InfinteScrollableChat } from './Dashboard/Doctor/Messnger/InfinteScrollableChat';
export { default as Conversation } from './Dashboard/Doctor/Messnger/Conversation';
export { default as ChatBox } from './Dashboard/Doctor/Messnger/ChatBox';
export { default as CoversationCTRL } from './Dashboard/Doctor/Messnger/CoversationCTRL';
export { default as MainChat } from './Dashboard/Doctor/Messnger/MainChat';
export { default as Message } from './Dashboard/Doctor/Messnger/Message';
export { default as PatientCart } from './Dashboard/Doctor/Messnger/PatientCart';

//Screens at Doctor
export { default as OverFlow } from './Dashboard/Doctor/Screens/OverFlow';
export { default as Appointments } from './Dashboard/Doctor/Screens/Appointments';
export { default as CalenderScreen } from './Dashboard/Doctor/Screens/CalenderScreen';
export { default as PatientList } from './Dashboard/Doctor/Screens/PatientList';
export { default as Payment } from './Dashboard/Doctor/Screens/Payment';

/////////////Skilliton
export { default as SkilMSGs } from '../Skilitons/SkilMSGs';




///////Admin
//Layouts
export { default as AdminSidebar } from './Dashboard/Admin/Layouts/AdminSidebar';
// Charts 
export { default as ColumnPlot } from './Dashboard/Admin/Overflow/Charts/ColumnPlot';
export { default as RadialBarPlot } from './Dashboard/Admin/Overflow/Charts/RadialPlot';

export { default as MainOverflow } from './Dashboard/Admin/Overflow/MainOverflow';

export { default as Gridstatics } from './Dashboard/Admin/Overflow/Gridstatics';
