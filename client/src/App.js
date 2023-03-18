import {
  LandingPage, SignIn, SignUp, RequireAuth, AdminDash,
  Layout, Profile, PersistLogin, DoctorDash, PatientDash, PatientPage,
  ForgetPassword, ConfirmEmail, ResetPassword, DoctorSignUp, MainAppintment
} from './Components/Exports'
import { Route, Routes } from 'react-router-dom';
import { ROLES } from './Config/Roles';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './Redux/Slices/UserSlice';

function App() {
  const userInfo = useSelector(selectCurrentUser)
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route element={<PersistLogin />}>
          <Route path="signupDoctor" element={<DoctorSignUp />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="verify" element={<ConfirmEmail />} />
          <Route path="reset/:token" element={<ResetPassword />} />
          <Route index element={<LandingPage />} />
          <Route path="doctor/:drDash" element={<DoctorDash />} />
          <Route path="patient/:dash" element={<PatientDash />} />
          <Route path="admin/:admindash" element={<AdminDash />} />
          <Route path="book-appointment" element={<MainAppintment />} />
          <Route path="profile" element={<PatientPage />} />
          <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
            <Route index element={<LandingPage />} />
            <Route path={userInfo?.username} element={<Profile />} />
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
