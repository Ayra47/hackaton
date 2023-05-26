"use client";
import { Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import s from "./HotRecomendation.module.scss";

export default function HotRecomendation({ products }) {
    return (
        <div className={s["section__start-banner"]}>
            <div className={"start-banner w-container"}>
                <div className={s["start-banner__title"]}>
                    🔥Горящие товары🔥
                </div>
                <Swiper
                    modules={[Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    breakpoints={{
                        // configure when window width is <= 640px
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div
                                className={s["products__item"]}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    className={s["products__item-img"]}
                                    src={item.image}
                                    alt={item.title}
                                />
                                <div className={s["products__item-title"]}>
                                    {item.title}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
