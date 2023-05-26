"use client"

import { CheckUser } from "@/services/AuthService";
import { deleteCookie, getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page () {
    const [user, setUser] = useState()

    useEffect(() => {
        (async function() {
            try {
                const token = getCookie("jwt")
                const checked = await CheckUser(token)
                console.log('checked', checked);
                if (!checked) {
                    deleteCookie("jwt");
                    window.location = `${process.env.NEXT_PUBLIC_HOST}/login`
                }
                setUser(checked.logged_in_as)
            } catch(e) {
                window.location = `${process.env.NEXT_PUBLIC_HOST}/login`
            }
        })()
    }, [])

    return (
        <div style={{display: "flex", flexDirection: "column"}} className="w-container">
            <div>
                hello {user}
            </div>
            <Link href='/account/setting'>
                setting page
            </Link>
            <Link href='/account/products'>
                products page
            </Link>
        </div>
    )
}