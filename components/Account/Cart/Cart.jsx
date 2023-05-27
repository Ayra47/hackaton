"use client";

import CreateButton from "@/components/UI/Buttons/CreateButton";
import s from "./Cart.module.scss";
import { removeProduct } from "@/services/CatalogService";
import { getCookie } from "cookies-next";

export default function Cart({ products, setProducts }) {
    const removeItem = async(id) => {
        const token = getCookie("jwt")
        const service = await removeProduct(token, id)
        console.log('serv', service);
        if (service.success) {
            setProducts(service.data.newData.items)
        }
    }

    return (
        <div className={s.section__catalog}>
            <div className="w-container">
            {Array.isArray(products) ? (
                <div className={s.catalog}>
                    <div className={s.catalog__items}>
                        {products.map((item, index) => {
                            let percent = 0;
                            if (item.product.old_price) {
                                percent =
                                    ((item.product.old_price - item.product.price) /
                                        item.product.old_price) *
                                    100;
                            }
                            return (
                                <div className={s.catalog__item} key={index}>
                                    <img
                                        src={'/images/product1.jpg'}
                                        alt={item.product.product_name}
                                        className={s["catalog__item-img"]}
                                    />
                                    {item.product.old_price ? (
                                        <div
                                            className={
                                                s["catalog__item-price-wrapper"]
                                            }
                                        >
                                            <div
                                                className={`${s["catalog__item-price"]} ${s["catalog__item-price--discount"]}`}
                                            >
                                                {item.product.price} ₽
                                            </div>
                                            <div
                                                className={
                                                    s[
                                                        "catalog__item-block-price"
                                                    ]
                                                }
                                            >
                                                <div
                                                    className={`${s["catalog__item-price"]} ${s["catalog__item-price--old"]}`}
                                                >
                                                    {item.product.old_price} ₽
                                                </div>
                                                <div
                                                    className={`${s["catalog__item-price"]} ${s["catalog__item-price--percent"]}`}
                                                >
                                                    -{percent.toFixed(2)} %
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            className={s["catalog__item-price"]}
                                        >
                                            {item.product.price} ₽
                                        </div>
                                    )}
                                    <div className={s["catalog__item-name"]}>
                                        {item.product.name}
                                    </div>
                                    <div
                                        className={
                                            s["catalog__item-block-control"]
                                        }
                                    >
                                        <div style={{ marginTop: "auto" }}>
                                            <CreateButton
                                                color="red"
                                                size="sm"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                Убрать из корзины
                                            </CreateButton>
                                        </div>
                                        <div style={{ marginTop: "auto" }}>
                                            <CreateButton className="catalog__item-button">
                                                <img
                                                    src="/svg/like/Heart.svg"
                                                    alt="next"
                                                />
                                            </CreateButton>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div style={{marginTop: "20px"}}>
                        <CreateButton size='xxl'>Перейти к оформлению заказа</CreateButton>
                    </div>
                </div>
            ) : (
                "Корзина пуста"
            )}
            </div>
        </div>
    );
}
