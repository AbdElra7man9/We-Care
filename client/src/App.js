import {
  Home, SignIn, SignUp, RequireAuth,
  Layout, Profile, PersistLogin, DoctorDash,
  Confirm, ForgetPassword, SocketConnect
} from './Components/Exports'
import { Route, Routes, useLocation } from 'react-router-dom';
import { ROLES } from './Config/Roles';
import { AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './Redux/Slices/UserSlice';

function App() {
  const userInfo = useSelector(selectCurrentUser)
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="doctor/:dash" element={<DoctorDash />} />
          <Route element={<PersistLogin />}>
            <Route element={<SocketConnect />}>
              <Route path="confirm" element={<Confirm />} />
              <Route path="forgetpassword" element={<ForgetPassword />} />
              <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
                <Route index element={<Home />} />
                <Route path={userInfo?.username} element={<Profile />} />
                <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                  {/* <Route path="dashboard" element={<Dashboard />} /> */}
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
