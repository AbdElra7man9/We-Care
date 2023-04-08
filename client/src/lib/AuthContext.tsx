import { createContext, FC, useContext, useEffect, useState } from 'react';
import { useRefreshMutation } from '@Redux/APIs/AuthApi';
import { selectCurrentToken, setCredentials } from '@Redux/Slices/UserSlice';
import usePersist from '@Hooks/usePersist';
import { useAppDispatch, useAppSelector } from '@Hooks/useRedux';
import Loadingscreen from '@Components/Layouts/Loadingscreen';
import { user } from '@lib/types';

interface auth {
    token?: string;
    user?: user
}


interface AuthContextProps {
    authState: auth;
    isPatient: Boolean;
    isDoctor: Boolean;
    isAdmin: Boolean;
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

    const [persist] = usePersist();
    const token = useAppSelector(selectCurrentToken);
    const [authState, setAuthState] = useState<auth>({});
    const [isPatient, setIsPatient] = useState<Boolean>(false);
    const [isDoctor, setIsDoctor] = useState<Boolean>(false);
    const [isAdmin, setIsAdmin] = useState<Boolean>(false);

    const dispatch = useAppDispatch();
    const [refresh, { isUninitialized, isLoading, isSuccess, isError }] = useRefreshMutation();

    useEffect(() => {
        if (persist && !token) {
            console.log('refreshing ...')
            refresh()
                .unwrap()
                .then(({ token, user }) => {
                    dispatch(setCredentials({ token, user }));
                    setAuthState({ token, user })
                })
                .catch((err) => {
                    //Error here
                });
        }
    }, []);
    useEffect(() => {
        if (authState.user?.__t === 'patient') {
            setIsPatient(true)
        }
        if (authState.user?.__t === 'doctor') {
            setIsDoctor(true)
        }
        if (authState.user?.__t === 'admin') {
            setIsAdmin(true)
        }
    }, []);

    if (isLoading) {
        console.log(isUninitialized)
        return <Loadingscreen />;
    }

    if (isError) {
        // handle error
    }

    return <AuthContext.Provider value={{ authState, isPatient, isDoctor, isAdmin }}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextProps => {
    const { authState, isPatient, isDoctor, isAdmin } = useContext(AuthContext);
    return { authState, isPatient, isDoctor, isAdmin }
};

export default useAuth;
