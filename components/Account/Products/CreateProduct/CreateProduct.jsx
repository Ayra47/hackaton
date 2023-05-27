"use client";

import CreateInput from "@/components/UI/Inputs/CreateInput";
import { useState } from "react";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import Link from "next/link";

export default function CreateProduct() {
    const [model, setModel] = useState({
        name: "",
        description: "",
        price: "",
        old_price: ""
    });

    const changeField = (field, value) => {
        setModel({ ...model, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('model', model);
    }

    return (
        <div className={s["section__create"]}>
            <div className="w-container">
                <Link className={s["product-link__back"]} href="/account/products"> Вернуться ко всем товарам</Link>
                <form onSubmit={handleSubmit} className={`${s["create-product"]} base-form`}>
                    <div className={`${s.product__content} base-form__content`}>
                        <div className={s["product__content__text"]}>Добавление товара</div>
                        <div className="form-group">
                            <label cclassName={s["product__content__text"]} htmlFor="">
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
                        </div>
                        <div className="form-group">
                            <label cclassName={s["product__content__text"]} htmlFor="">
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
                            <label cclassName={s["product__content__text"]}  htmlFor="">
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
                        </div>
                        <div className="form-group">
                            <label cclassName={s["product__content__text"]}  htmlFor="">
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
                    </div>
                </form>
            </div>
        </div>
    );
}
