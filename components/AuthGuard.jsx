import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function AuthGuard({children}) {
    const router = useRouter();

    const authApi = () => {
        
    }

    useEffect(() => {

    }, [])

    return(
        <>
            <main>
                {children}
            </main>
        </>
    )
}