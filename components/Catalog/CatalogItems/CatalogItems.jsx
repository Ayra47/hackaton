"use client";

import CreateButton from "@/components/UI/Buttons/CreateButton";
import s from "./CatalogItems.module.scss";
import Pagination from "@/components/UI/Pagination/Pagination";

export default function CatalogItems({ products, totalPages, currentPage }) {
    return (
        <div className={s.section__catalog}>
            <h1>Страница #{currentPage}</h1>
            {Array.isArray(products) ? (
                <div className={s.catalog}>
                    <div className={s.catalog__items}>
                        {products.map((item, index) => {
                            let percent = 0;
                            if (item.old_price) {
                                percent =
                                    ((item.old_price - item.price) /
                                        item.old_price) *
                                    100;
                            }
                            return (
                                <div className={s.catalog__item} key={index}>
                                    <img
                                        src={'/images/product1.jpg'}
                                        alt={item.product_name}
                                        className={s["catalog__item-img"]}
                                    />
                                    {item.old_price ? (
                                        <div
                                            className={
                                                s["catalog__item-price-wrapper"]
                                            }
                                        >
                                            <div
                                                className={`${s["catalog__item-price"]} ${s["catalog__item-price--discount"]}`}
                                            >
                                                {item.price} ₽
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
                                                    {item.old_price} ₽
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
                                            {item.price} ₽
                                        </div>
                                    )}
                                    <div className={s["catalog__item-name"]}>
                                        {item.product_name}
                                    </div>
                                    <div
                                        className={
                                            s["catalog__item-block-control"]
                                        }
                                    >
                                        <div style={{ marginTop: "auto" }}>
                                            <CreateButton
                                                color="blue"
                                                size="sm"
                                            >
                                                Добавить в корзину
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
                    <Pagination totalPages={totalPages} />
                </div>
            ) : (
                "Нет данных по текущему запросу"
            )}
        </div>
    );
}
