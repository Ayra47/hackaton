"use client"

import { CheckUser } from "@/services/AuthService";
import { deleteCookie, getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import s from "./PrivateArea.module.scss";

export default function PrivateArea({user}) {

    return (
        <div style={{ display: "flex", flexDirection: "column" }} className="w-container">
            <div className={s["accaunt_conteiner"]}>
            <img src="/images/user.svg" alt="account"/>
                <div>
                    <label  className="accaunt.text-style">Привет &quot;{user}&quot;</label>
                </div>
                <Link href='/account/setting'>
                    Настройки
                </Link>
                <Link href='/account/products'>
                    Страница продуктов
                </Link>
            </div>
        </div>
    )
}