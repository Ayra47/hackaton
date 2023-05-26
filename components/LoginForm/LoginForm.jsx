"use client";

import { useState } from "react";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import CreateInput from "@/components/UI/Inputs/CreateInput";
import Loader from "@/components/UI/Loader/Loader";
import s from "./LoginForm.module.scss";
import Link from "next/link";
import { authApi } from "@/services/AuthService";

const LoginForm = () => {
    const [spinner, setSpinner] = useState(false);
    const [model, setModel] = useState({
        login: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        setSpinner(true);
        (async () => {
            const service = authApi(model);
            console.log('service', service);
            setSpinner(false)
        })();
    };

    const changeField = (field, value) => {
        setModel({ ...model, [field]: value });
    };

    return (
        <div className={s["login-form"]}>
            <img
                src="/gif/wheat.gif"
                className={s["login-form__gif"]}
                alt="гифка"
            />
            <form className="base-form" onSubmit={submit}>
                <div className="base-form__content">
                    <div className="form__title">Авторизация</div>
                    <div className="form-group">
                        <label className="form-group" htmlFor="">Логин</label>
                        <CreateInput focus="blue"
                            value={model.login}
                            onChange={(e) =>
                                changeField("login", e.target.value)
                            }
                            type="text"
                            placeholder="Логин"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-group" htmlFor="">Пароль</label>
                        <CreateInput focus="blue"
                            value={model.password}
                            onChange={(e) =>
                                changeField("password", e.target.value)
                            }
                            type="password"
                            placeholder="Пароль"
                        />
                    </div>
                    <div className="form-group">
                        <CreateButton color="orange">Войти</CreateButton>
                    </div>
                </div>
                <div className="base-form__content base-form__footer">
                    <h4 className="form-group">Нет аккаунта?</h4>
                    <Link className='base-form__content-link' href={"/register"}>Регистрация</Link>
                </div>
            </form>
            {spinner ? <Loader /> : null}
        </div>
    );
};

export default LoginForm;
