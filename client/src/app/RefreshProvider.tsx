'use client';
import React from "react";
import { useSession } from "next-auth/react"
import Loadingscreen from "@Components/Layouts/Loadingscreen";

type RefreshProviderProps = {
    children: React.ReactNode;
};
export default function RefreshProvider({ children }: RefreshProviderProps) {
    const { status } = useSession()
    return(
        <>
            {(status === 'loading') ? <Loadingscreen /> : children}
        </>
    )
}
