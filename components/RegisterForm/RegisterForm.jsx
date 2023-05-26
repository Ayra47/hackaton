"use client";

import { useState } from "react";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import CreateInput from "@/components/UI/Inputs/CreateInput";
import Loader from "@/components/UI/Loader/Loader";
import s from "./RegisterForm.module.scss";
import Link from "next/link";
import { authApi, registerApi } from "@/services/AuthService";

const RegisterForm = () => {
    const [spinner, setSpinner] = useState(false);
    const [model, setModel] = useState({
        login: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState([])

    const submit = (e) => {
        e.preventDefault();
        setErrors("");
        setSpinner(true);
        (async () => {
            try {
                const service = registerApi(model);
                console.log('service', service);
            } catch(e) {
                console.log('error', e);
                setErrors(e.errors)
            }
            setSpinner(false)
        })();
    };

    const changeField = (field, value) => {
        setModel({ ...model, [field]: value });
    };

    return (
        <div className={s["register-form"]}>
            <img
                src="/gif/wheat.gif"
                className={s["register-form__gif"]}
                alt="гифка"
            />
            <form className="base-form" onSubmit={submit}>
                <div className="base-form__content">
                    <div className="form__title">Регистрация</div>
                    <div className="form-group">
                        <label className="form-group" htmlFor="">
                            Email
                        </label>
                        <CreateInput
                            value={model.email}
                            onChange={(e) =>
                                changeField("email", e.target.value)
                            }
                            type="text"
                            placeholder="Email"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-group" htmlFor="">
                            Логин
                        </label>
                        <CreateInput
                            value={model.login}
                            onChange={(e) =>
                                changeField("login", e.target.value)
                            }
                            type="text"
                            placeholder="Логин"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-group" htmlFor="">
                            Пароль
                        </label>
                        <CreateInput
                            value={model.password}
                            onChange={(e) =>
                                changeField("password", e.target.value)
                            }
                            type="password"
                            placeholder="Пароль"
                        />
                    </div>
                    {/* <div className="form-group">
                        <label className="form-group" htmlFor="">
                            Повторите пароль
                        </label>
                        <CreateInput
                            value={model.password_confirmation}
                            onChange={(e) =>
                                changeField(
                                    "password_confirmation",
                                    e.target.value
                                )
                            }
                            type="password"
                            placeholder="Повторите пароль"
                        />
                    </div> */}
                    <div className="form-group">
                        <CreateButton color="orange">Регистрация</CreateButton>
                    </div>
                    {
                        errors ? <div className="form-group error">{errors}</div> : null
                    }
                </div>
                <div className="base-form__content base-form__footer">
                    <h4 className="form-group">Есть аккаунт?</h4>
                    <Link className="base-form__content-link" href={"/login"}>
                        Вход
                    </Link>
                </div>
            </form>
            {spinner ? <Loader /> : null}
        </div>
    );
};

export default RegisterForm;
