'use client';
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes'
import React from "react";
import { Provider } from 'react-redux';
import { store, wrapper } from '@Redux/Store';
import { AuthProvider } from '@Contexts/AuthContext';
import { UserProvider } from '@Contexts/UserContextProps';

type providersProps = {
  children: React.ReactNode;
  session?: any;
};
export default function Providers({ children, session }: providersProps) {


  // const { store } = wrapper.useWrappedStore({ initialState: { fo: "bar" } })
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <AuthProvider>
            <UserProvider>

              <div className=" dark:text-gray-500 text-gray-700 transition-colors duration-300 min-h-screen select-none">
                {children}
              </div>

            </UserProvider>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
