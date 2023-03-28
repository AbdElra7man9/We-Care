import { createContext, FC, useContext, useEffect, useState } from 'react';
import { useRefreshMutation } from '../Redux/APIs/AuthApi';
import { selectCurrentToken, setCredentials } from '@Redux/Slices/UserSlice';
import usePersist from '@Hooks/usePersist';
import { useAppDispatch, useAppSelector } from '@Hooks/useRedux';
import Loadingscreen from '@Components/Layouts/Loadingscreen';
import { user } from '@lib/types';
interface AuthContextProps {
    token?: string;
    user?: user
}

const AuthContext = createContext<AuthContextProps>({});

export const AuthProvider: FC<{ children: React.ReactNode }> = ({ children }) => {

    const [persist] = usePersist();
    const token = useAppSelector(selectCurrentToken);

    const dispatch = useAppDispatch();
    const [refresh, { isUninitialized, isLoading, isSuccess, isError }] = useRefreshMutation();

    useEffect(() => {
        if (persist && !token) {
            console.log('refreshing ...')
            refresh()
                .unwrap()
                .then(({ token, user }) => {
                    dispatch(setCredentials({ token, user }));
                })
                .catch((err) => console.error(err));
        }
    }, []);
    if (isLoading || isUninitialized) {
        return <Loadingscreen />;
    }

    if (isError) {
        // handle error
    }

    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
