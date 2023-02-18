
////////////////////////Routes/////////////////////////////
export { default as SignIn } from '../Routes/SignIn';
export { default as SignUp } from '../Routes/SignUp';
export { default as ForgetPassword } from '../Routes/ForgetPassword';
export { default as Confirm } from '../Routes/Confirm';
export { default as Home } from '../Routes/Home';
export { default as Profile } from '../Routes/Profile';
export { default as DoctorDash } from '../Routes/DoctorDash';


export { default as LoadingScreen } from '../Components/Layouts/LoadingScreen';

////////////////////////Doctor/////////////////////////////
export { default as SideBar } from '../Components/Dashboard/Doctor/Layouts/SideBar';
export { default as HeaderDoc } from '../Components/Dashboard/Doctor/Layouts/HeaderDoc';
export { default as ColumnChart } from '../Components/Dashboard/Doctor/Layouts/Graphs/ColumnChart';
//OverFlow
export { default as CardDetails } from '../Components/Dashboard/Doctor/Layouts/OverFlow/CardDetails';
export { default as RightPartOverFlow } from '../Components/Dashboard/Doctor/Layouts/OverFlow/RightPartOverFlow';
//Screens at Doctor
export { default as OverFlow } from '../Components/Dashboard/Doctor/Screens/OverFlow';
export { default as CalenderScreen } from '../Components/Dashboard/Doctor/Screens/CalenderScreen';



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