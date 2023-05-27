"use client";

import { useState } from "react";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import CreateInput from "@/components/UI/Inputs/CreateInput";
import Loader from "@/components/UI/Loader/Loader";
import s from "./LoginForm.module.scss";
import Link from "next/link";
import { authApi } from "@/services/AuthService";
import { setCookie } from 'cookies-next';

const LoginForm = () => {
    const [spinner, setSpinner] = useState(false);
    const [model, setModel] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState();

    const submit = (e) => {
        e.preventDefault();
        setSpinner(true);
        setErrors("");
        (async () => {
            const service = await authApi(model);
            if (service.status) {
                setCookie('jwt', service.authorisation.token)
                window.location = `${process.env.NEXT_PUBLIC_HOST}/account`
            } else {
                setErrors(service.error)
            }
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
                        <label className="form-group" htmlFor="">Email</label>
                        <CreateInput focus="blue"
                            value={model.email}
                            onChange={(e) =>
                                changeField("email", e.target.value)
                            }
                            type="text"
                            placeholder="email"
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
                    {
                        errors ?
                    <div className="form-group error">
                        {errors}
                    </div> : null 
                    }
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
