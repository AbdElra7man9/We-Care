import { useSelector } from 'react-redux';
import { selectCurrentUser } from '@Redux/Slices/UserSlice';
import useAuth from "@Hooks/useAuth";
import { FC } from "react";
interface RequireAuthProps {
    allowedRoles: string[];
}

const RequireAuth: FC<RequireAuthProps> = ({ allowedRoles }) => {
    const { roles } = useAuth();
    const location = useLocation();
    const userInfo = useSelector(selectCurrentUser)
    return (
        <>
            {!userInfo?.confirmed && <Navigate to={`/confirm?email=${userInfo?.email}`} state={{ from: location }} replace />}
            {roles.some(role => allowedRoles.includes(role))
                ? <Outlet />
                : <Navigate to="/signin" state={{ from: location }} replace />
            }
        </>
    )
}
export default RequireAuth