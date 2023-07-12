'use client';
import React from "react";
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux';
import { store } from '@Redux/Store';
import { AuthProvider } from '@Contexts/AuthContext';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { MessagesProvider } from "@Contexts/MessagesContext";
import Loadingscreen from "@Components/Layouts/Loadingscreen";

type providersProps = {
  children: React.ReactNode;
  session?: any;
};
export default function Providers({ children, session }: providersProps) {
  const queryClient = new QueryClient()
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <MessagesProvider>
                {children}
              </MessagesProvider>
            </QueryClientProvider>
          </AuthProvider>
        </ThemeProvider>
      </Provider>
    </SessionProvider>
  );
}
