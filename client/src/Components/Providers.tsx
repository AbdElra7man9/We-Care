'use client';
import { ThemeProvider } from 'next-themes'
import React from "react";
import { Provider } from 'react-redux';
import { store } from '@Redux/Store';
import { AuthProvider } from '@lib/PersistLogin';

type providersProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: providersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <AuthProvider>

          {children}
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
