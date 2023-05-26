"use client";

import { useState } from "react";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import CreateInput from "@/components/UI/Inputs/CreateInput";
import Loader from "@/components/UI/Loader/Loader";
import s from "./LoginForm.module.scss";
import Link from "next/link";

const LoginForm = () => {
    const [spinner, setSpinner] = useState(false);
    const [model, setModel] = useState({
        login: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();
        setSpinner(true);
        console.log("model", model);
        (async () => {
            function artificialAwait(callback) {
                setTimeout(function () {
                    callback();
                }, 5000); // 5000 миллисекунд = 5 секунд
            }

            artificialAwait(function () {
                console.log("Пауза в 5 секунд завершена");
                // выполняем действия после задержки
                setSpinner(false);
            });
        })();
    };

    const changeField = (field, value) => {
        setModel({ ...model, [field]: value });
    };

    return (
        <div className={s["login-form"]}>
            <form className="base-form" onSubmit={submit}>
                <div className="base-form__content">
                    <div className="form__title">Авторизация</div>
                    <div className="form-group">
                        <label htmlFor="">Логин</label>
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
                        <label htmlFor="">Пароль</label>
                        <CreateInput
                            value={model.password}
                            onChange={(e) =>
                                changeField("password", e.target.value)
                            }
                            type="password"
                            placeholder="Логин"
                        />
                    </div>
                    <div className="form-group">
                        <CreateButton color="blue">Войти</CreateButton>
                    </div>
                </div>
                <div className="base-form__content base-form__footer">
                    <h4>Нет аккаунта?</h4>
                    <Link href={"/register"}>Регистрация</Link>
                </div>
            </form>
            {spinner ? <Loader /> : null}
        </div>
    );
};

export default LoginForm;
