"use client";

import CreateInput from "@/components/UI/Inputs/CreateInput";
import s from "./CreateProduct.module.scss";
import { useState } from "react";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import Link from "next/link";
import { createProduct } from "@/services/CatalogService";
import { getCookie, setCookie } from "cookies-next";

export default function CreateProduct() {
    const [model, setModel] = useState({
        name: "",
        description: "",
        price: "",
        old_price: ""
    });
    const [errors, setErrors] = useState()
    const [success, setSuccess] = useState()

    const changeField = (field, value) => {
        setModel({ ...model, [field]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErrors(0);
        setSuccess(0);
        const token = getCookie("jwt");
        const service = await createProduct(token, model);
        if (service.success) {
        } else {
            setErrors(service.errors)
        }
    }

    return (
        <div className={s["section__create"]}>
            <div className="w-container">
                <Link className={s["product-link__back"]} href="/account/products"> Вернуться ко всем товарам</Link>
                <form onSubmit={handleSubmit} className={`${s["create-product"]} base-form`}>
                    <div className={`${s.product__content} base-form__content`}>
                        <div className={s["product__content__text"]}>Добавление товара</div>
                        <div className="form-group">
                            <label className={s["product__content__text"]} htmlFor="">
                                Название товара
                            </label>
                            <CreateInput
                                focus="blue"
                                value={model.name}
                                onChange={(e) =>
                                    changeField("name", e.target.value)
                                }
                                type="text"
                                placeholder="Сыр"
                            />
                            {errors && errors.name ? errors.name : null}
                        </div>
                        <div className="form-group">
                            <label className={s["product__content__text"]} htmlFor="">
                                Описание
                            </label>
                            <CreateInput
                                focus="blue"
                                value={model.description}
                                onChange={(e) =>
                                    changeField("description", e.target.value)
                                }
                                type="text"
                                placeholder="Сыр с плесенью"
                            />
                        </div>
                        <div className="form-group">
                            <label className={s["product__content__text"]}  htmlFor="">
                                Текущая цена
                            </label>
                            <CreateInput
                                focus="blue"
                                value={model.email}
                                onChange={(e) =>
                                    changeField("price", e.target.value)
                                }
                                type="text"
                                placeholder="200"
                            />
                            {errors && errors.price ? errors.price : ""}
                        </div>
                        <div className="form-group">
                            <label className={s["product__content__text"]}  htmlFor="">
                                Старая цена
                            </label>
                            <CreateInput
                                focus="blue"
                                value={model.email}
                                onChange={(e) =>
                                    changeField("old_price", e.target.value)
                                }
                                type="text"
                                placeholder="340"
                            />
                        </div>
                        <CreateButton color='orange'>Добавить товар</CreateButton>
                        {
                            success ? "Добавлено" : null
                        }
                    </div>
                </form>
            </div>
        </div>
    );
}
