'use client';
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes'
import React from "react";
import { Provider } from 'react-redux';
import { store } from '@Redux/Store';
import { AuthProvider } from '@Contexts/AuthContext';
import { UserProvider } from '@Contexts/UserContextProps';
import ClientOnly from "./ClientOnly";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import SocketProvider from "@Contexts/SocketContext";
import { MessagesProvider } from "@Contexts/MessagesContext";

type providersProps = {
  children: React.ReactNode;
  session?: any;
};
export default function Providers({ children, session }: providersProps) {
  // const { store } = wrapper.useWrappedStore({ initialState: { fo: "bar" } })
  const queryClient = new QueryClient()

  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <AuthProvider>
              <UserProvider>
                <SocketProvider>
                  <MessagesProvider>
                    <div className=" dark:text-gray-500 text-gray-700 transition-colors duration-300 min-h-screen">
                      <Toaster position='top-center' reverseOrder={false} />
                      {children}
                    </div>
                  </MessagesProvider>
                </SocketProvider>
              </UserProvider>
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    </SessionProvider >
  );
}
