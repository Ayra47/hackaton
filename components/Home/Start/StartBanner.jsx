import Link from "next/link";
import style from "./StartBanner.module.scss";

const StartBanner = () => {
    const startLink = [
        {
            id: 1,
            name: "Молочная продукция",
            url: "/catalog",
        },
        {
            id: 2,
            name: "Мясо, птицы,  кролики",
            url: "/catalog",
        },
        {
            id: 3,
            name: "Овощи, фрукты, ягоды",
            url: "/catalog",
        },
        {
            id: 4,
            name: "Морепродукты",
            url: "/catalog",
        },
        {
            id: 5,
            name: "Яйца",
            url: "/catalog",
        },
    ];

    const res = startLink.map(function (item) {
        return (
            <li key={item.id}>
                <Link href={item.url}>{item.name}</Link>
            </li>
        );
    });

    return (
        <div className={style["section-start-banner"]}>
            <div className="w-container">
                <div className={style["start-banner-border"]}>
                    <div className={style["start-banner"]}>
                        <div
                            className={`${style["start-banner__rectangle"]} ${style.rectangle}`}
                        >
                            <div
                                className={`${style.rectangle} ${style["rectangle--1"]}`}
                            ></div>
                            <div
                                className={`${style.rectangle} ${style["rectangle--2"]}`}
                            ></div>
                            <div
                                className={`${style.rectangle} ${style["rectangle--3"]}`}
                            ></div>
                            <div
                                className={`${style.rectangle} ${style["rectangle--4"]}`}
                            ></div>
                            <div
                                className={`${style.rectangle} ${style["rectangle--5"]}`}
                            ></div>
                            <div
                                className={`${style.rectangle} ${style["rectangle--6"]}`}
                            ></div>
                        </div>

                        <div
                            className={`${style["start-banner__content"]} ${style.content}`}
                        >
                            <div className={`${style.content} ${style.text}`}>
                                <p className={style["text__title"]}>
                                    Самый большой каталог фермерских продуктов
                                </p>
                                <p className={style["text__subtitle"]}>
                                    Заказывайте фермерскую продукцию в удобное
                                    время, в любом месте с частными
                                    специалистами
                                </p>
                            </div>
                            {/* Это БАЗА! */}
                            <div
                                className={`${style.content__food} ${style.food}`}
                            >
                                <div
                                    className={`${style.wrap} ${style["wrap--1"]}`}
                                >
                                    <div
                                        className={`${style["food__nameplate"]} ${style["food__nameplate--1"]}`}
                                    >
                                        <div
                                            className={`${style.food__name} ${style["food__name--red"]}`}
                                        >
                                            Лучшее
                                        </div>
                                        <div
                                            className={
                                                style["food__profession"]
                                            }
                                        >
                                            качество
                                        </div>
                                    </div>
                                    <img className={style["food-img"]} src="images\start-banner\fish.png" />
                                </div>
                                <div
                                    className={`${style.wrap} ${style["wrap--2"]}`}
                                >
                                    <div
                                        className={`${style.food__nameplate} ${style["food__nameplate--2"]}`}
                                    >
                                        <div
                                            className={`${style.food__name} ${style["food__name--red"]}`}
                                        >
                                            Простота
                                        </div>
                                        <div
                                            className={
                                                style["food__profession"]
                                            }
                                        >
                                            работы
                                        </div>
                                    </div>
                                    <img className={style["food-img"]} src="images\start-banner\fruits.png" />
                                </div>
                                <div
                                    className={`${style.wrap} ${style["wrap--3"]}`}
                                >
                                    <img className={style["food-img"]} src="images\start-banner\vegetables.png" />
                                </div>
                                <div
                                    className={`${style.wrap} ${style["wrap--4"]}`}
                                >
                                    <div
                                        className={`${style.food__nameplate} ${style["food__nameplate--3"]}`}
                                    >
                                        <div
                                            className={`${style.food__name} ${style["food__name--blue"]}`}
                                        >
                                            Надежность
                                        </div>
                                        <div
                                            className={
                                                style["food__profession"]
                                            }
                                        >
                                            во всём
                                        </div>
                                    </div>
                                    <img className={style["food-img"]} src="images\start-banner\meat-perfect.png" />
                                </div>
                                <div
                                    className={`${style.wrap} ${style["wrap--5"]}`}
                                >
                                    <img className={style["food-img"]} src="images\start-banner\sauce.png" />
                                </div>
                            </div>
                            <div className={style["search-bar"]}>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder={"Поиск"}
                                />
                                <svg
                                    width="70"
                                    height="70"
                                    viewBox="0 0 70 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M0 35C0 15.67 15.67 0 35 0C54.33 0 70 15.67 70 35C70 54.33 54.33 70 35 70C15.67 70 0 54.33 0 35Z"
                                        fill="#1E1E20"
                                    />
                                    <path
                                        d="M46.2337 44.8602L40.5217 38.9194C41.9903 37.1735 42.795 34.9768 42.795 32.69C42.795 27.347 38.448 23 33.105 23C27.7621 23 23.415 27.347 23.415 32.69C23.415 38.033 27.7621 42.38 33.105 42.38C35.1109 42.38 37.0223 41.775 38.6566 40.6265L44.412 46.6124C44.6525 46.8622 44.9761 47 45.3228 47C45.651 47 45.9624 46.8749 46.1987 46.6474C46.7009 46.1641 46.7169 45.3628 46.2337 44.8602ZM33.105 25.5278C37.0543 25.5278 40.2672 28.7407 40.2672 32.69C40.2672 36.6393 37.0543 39.8522 33.105 39.8522C29.1557 39.8522 25.9429 36.6393 25.9429 32.69C25.9429 28.7407 29.1557 25.5278 33.105 25.5278Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className={style.tags}>
                                <ul className={style.tags__list}>{res}</ul>
                            </div>
                        </div>
                    </div>
                    <div className={style["statistics"]}>
                        <ul className={style["statistics__list"]}>
                            {/* ну тыпонял */}
                            <li>
                                <div className={style.num}>12</div>
                                <div className={style.text}>стран</div>
                            </li>
                            <li>
                                <div className={style.num}>280+</div>
                                <div className={style.text}>фермеров</div>
                            </li>
                            <li>
                                <div className={style.num}>2000+</div>
                                <div className={style.text}>Клиентов</div>
                            </li>
                            <li>
                                <div className={style.num}>5465+</div>
                                <div className={style.text}>Товаров</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartBanner;
