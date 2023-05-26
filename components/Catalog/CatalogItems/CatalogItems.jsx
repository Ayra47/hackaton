import CreateButton from "@/components/UI/Buttons/CreateButton";
import s from "./CatalogItems.module.scss";
import Pagination from "@/components/UI/Pagination/Pagination";

export default function CatalogItems({ products }) {
    return (
        <div className={s.section__catalog}>
            <div className={s.catalog}>
                <div className={s.catalog__items}>
                    {products.map((item) => {
                        let percent = 0;
                        if (item.old_price) {
                            percent = (item.old_price - item.price) / item.old_price * 100
                        }
                        return (
                            <div className={s.catalog__item}>
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
                                        <div
                                            className={`${s["catalog__item-price"]} ${s["catalog__item-price--old"]}`}
                                        >
                                            {item.old_price} ₽
                                        </div>
                                        <div
                                            className={`${s["catalog__item-price"]} ${s["catalog__item-price--percent"]}`}
                                        >-{percent.toFixed(2)} %</div>
                                    </div>
                                ) : (
                                    <div className={s["catalog__item-price"]}>
                                        {item.price} ₽
                                    </div>
                                )}
                                <div className={s["catalog__item-name"]}>
                                    {item.name}
                                </div>
                                <div style={{marginTop: 'auto'}}>
                                    <CreateButton size='sm'>Добавить в корзину</CreateButton>
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
