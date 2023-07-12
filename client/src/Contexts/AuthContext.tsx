'use client'
import { createContext, FC, useContext, useEffect, useState } from 'react';
import { useRefreshMutation } from '@Redux/APIs/AuthApi';
import { setCredentials } from '@Redux/Slices/UserSlice';
import { useAppDispatch } from '@Hooks/useRedux';
import Loadingscreen from '@Components/Layouts/Loadingscreen';
import { userType } from '@lib/types/user';
// import { useSession } from 'next-auth/react';

interface AuthContextProps {
    token?: string;
    user?: userType
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

    const [authState, setAuthState] = useState<AuthContextProps>({});
    const dispatch = useAppDispatch();
    const [refresh] = useRefreshMutation();
    // const { status } = useSession();

    useEffect(() => {
        refresh()
            .unwrap()
            .then(({ token, user }) => {
                dispatch(setCredentials({ token, user }));
                setAuthState({ token, user })
            })
            .catch((err) => {
                //Error here
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // if (status === 'loading') {
    //     return <Loadingscreen />;
    // }

    return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
    const authState = useContext(AuthContext);
    return authState
};

export default useAuth;
