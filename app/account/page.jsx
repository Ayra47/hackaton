"use client"
import PrivateArea from "@/components/Account/PrivateArea/PrivateArea";
import { CheckUser } from "@/services/AuthService";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Page() {
    const [user, setUser] = useState()

    useEffect(() => {
        (async function() {
            try {
                const token = getCookie("jwt")
                const checked = await CheckUser(token)
                if (!checked) {
                    deleteCookie("jwt");
                    window.location = `${process.env.NEXT_PUBLIC_HOST}/login`
                }
                setUser(checked.email)
            } catch(e) {
                window.location = `${process.env.NEXT_PUBLIC_HOST}/login`
            }
        })()
    }, [])

    return (
        <PrivateArea user={user} />
    )
}