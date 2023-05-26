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

    async function checkMe() {
        const token = getCookie("jwt")
        const checked = await CheckUser(token)
        console.log('checked', checked);
    }

    return (
        <div className="w-container">
            <div>
                hello {user}
            </div>
            <button onClick={checkMe}>check me</button>
            <Link href='/account/setting'>
                setting page
            </Link>
        </div>
    )
}