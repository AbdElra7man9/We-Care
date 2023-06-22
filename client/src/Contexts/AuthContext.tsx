import { createContext, FC, useContext, useEffect, useState } from 'react';
import { useRefreshMutation } from '@Redux/APIs/AuthApi';
import { setCredentials } from '@Redux/Slices/UserSlice';
import { useAppDispatch } from '@Hooks/useRedux';
import Loadingscreen from '@Components/Layouts/Loadingscreen';
import { userType } from '@lib/types/user';

interface AuthContextProps {
    token?: string;
    user?: userType
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

    const [authState, setAuthState] = useState<AuthContextProps>({});
    const dispatch = useAppDispatch();
    const [refresh, { isUninitialized, isLoading, isSuccess, isError }] = useRefreshMutation();

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

    if (isLoading) {
        // console.log(isUninitialized)
        return <Loadingscreen />;
    }

    if (isError) {
        // handle error
    }

    return <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
    const authState = useContext(AuthContext);
    return authState
};

export default useAuth;
