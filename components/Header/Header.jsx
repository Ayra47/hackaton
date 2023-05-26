"use client";

import Link from "next/link";
import s from "./Header.module.scss";
import { useEffect, useRef, useState } from "react";
import { deleteCookie } from "cookies-next";

export default function Header(props) {
    const sidebarRef = useRef(null);
    const [showSideBar, setShowSideBar] = useState(false);

    useEffect(() => {
        const onClick = (e) =>
            sidebarRef.current.contains(e.target) || setShowSideBar(false);
        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, []);

    function exit(){
        deleteCookie("jwt");
        window.location = `${process.env.NEXT_PUBLIC_HOST}/login`
    }

    return (
        <section ref={sidebarRef} className={`${s.sidebar}`}>
            <div className={s.sidebar__title}>Units</div>
            <div className={`${s["sidebar__menu"]} w-container`}>
                <input
                    checked={showSideBar}
                    onChange={(e) => setShowSideBar(e.target.checked)}
                    id="menu__toggle"
                    className={s.menu__toggle}
                    type="checkbox"
                />
                <label className={s.menu__btn} htmlFor="menu__toggle">
                    <span></span>
                </label>
                <ul className={s.menu__box}>
                    <li>
                        <img
                            className={s["menu__item-logo"]}
                            src="/images/logo.png"
                            alt="logo"
                        />
                    </li>
                    <li>
                        <Link className={s.menu__item} href={"/"}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link className={s.menu__item} href={"/catalog"}>
                            Каталог
                        </Link>
                    </li>
                    <li>
                        <Link className={s.menu__item} href={"/partners"}>
                            Партнёрам
                        </Link>
                    </li>
                    {props.user ? (
                        <div className={s["menu__item--right"]}>
                        <li>
                            <Link
                                className={`${s.menu__item} ${s['menu__item-cart']}`}
                                href={"/account"}
                            >
                                <img width={25} src="/svg/shopping-cart.svg" alt="cart" />
                            </Link>
                        </li>
                            <li>
                                <Link
                                    className={`${s.menu__item} ${s['menu__item-lk']}`}
                                    href={"/account"}
                                >
                                    <img src="/images/user.svg" alt="account" />
                                </Link>
                            </li>
                            <li>
                            <button onClick={exit} className={`${s.menu__item} ${s['menu__item-exit']}`}>Выход</button>
                            </li>
                        </div>
                    ) : (
                        <div className={s["menu__item--right"]}>
                            <li>
                                <Link
                                    className={`${s.menu__item} ${s["menu__item-auth"]}`}
                                    href={"/login"}
                                >
                                    Авторизация
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`${s.menu__item} ${s["menu__item-auth"]} ${s["menu__item-auth--border"]}`}
                                    href={"/register"}
                                >
                                    Регистрация
                                </Link>
                            </li>
                        </div>
                    )}
                </ul>
            </div>
        </section>
    );
}
