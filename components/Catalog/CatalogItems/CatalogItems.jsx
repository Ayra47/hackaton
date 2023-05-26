import CreateButton from "@/components/UI/Buttons/CreateButton";
import s from "./CatalogItems.module.scss";
import Pagination from "@/components/UI/Pagination/Pagination";

export default function CatalogItems({ products }) {
    return (
        <div className={s.section__catalog}>
            <div className={s.catalog}>
                <div className={s.catalog__items}>
                    {products.map((item, index) => {
                        let percent = 0;
                        if (item.old_price) {
                            percent = (item.old_price - item.price) / item.old_price * 100
                        }
                        return (
                            <div className={s.catalog__item} key={index}>
                                <img
                                    src={item.image}
                                    alt={item.name}
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
                                        <div className={s["catalog__item-block-price"]}>

                                            <div
                                                className={`${s["catalog__item-price"]} ${s["catalog__item-price--old"]}`}
                                            >
                                                {item.old_price} ₽
                                            </div>
                                            <div
                                                className={`${s["catalog__item-price"]} ${s["catalog__item-price--percent"]}`}
                                            >-{percent.toFixed(2)} %</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className={s["catalog__item-price"]}>
                                        {item.price} ₽
                                    </div>
                                )}
                                <div className={s["catalog__item-name"]}>
                                    {item.name}
                                </div>

                                <div className={s["catalog__item-block-price"]}>
                                    <h id="dateHeading">Дата 1</h>
                                    <h id="dateHeading">:</h>
                                    <h id="dateHeading">Дата 2</h>
                                </div>
                                <div className={s["catalog__item-block-control"]}>

                                    <div style={{ marginTop: 'auto' }}>
                                        <CreateButton color="blue" size='sm'>Добавить в корзину</CreateButton>
                                    </div>
                                    <div style={{ marginTop: 'auto' }}>
                                        <CreateButton className="catalog__item-button">
                                            <img src="/svg/like/Heart.svg" alt="next" />
                                        </CreateButton>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Pagination totalPages={9} />
            </div>
        </div>
    );
}
