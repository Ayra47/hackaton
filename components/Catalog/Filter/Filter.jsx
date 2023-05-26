"use client";

import { useState } from "react";
import s from "./Filter.module.scss";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import Link from "next/link";

export default function Filter(props) {
    const [checkboxBlock, setCheckboxBlock] = useState(false);

    const filter = () => {
        var list = [];
        for (var key in props.filter) {
            list.push([
                {
                    options: props.filter[key].links,
                    name: props.filter[key].name,
                },
            ]);
        }

        return list;
    };
    return (
        <>
            <div className={s.section__filter}>
                <div className={s.filter}>
                    {filter().map((item, idx) => {
                        return (
                            <MainFilter
                                {...item[0]}
                                key={idx}
                                checkboxBlock={checkboxBlock}
                                setCheckboxBlock={setCheckboxBlock}
                            />
                        );
                    })}
                    <div className={s.filter__clear}>
                        <CreateButton
                            size="sm"
                            onClick={() =>
                                Router.replace(
                                    { pathname: "/catalog" },
                                    undefined,
                                    { scroll: false }
                                )
                            }
                            color="contur"
                        >
                            Очистить всё
                        </CreateButton>
                    </div>
                </div>
            </div>
        </>
    );
}

const MainFilter = (props) => {
    return (
        <div className={s.filter__entity}>
            <div className={s["filter__entity-title"]}>{props.name}</div>
            <div className={s["filter__entity-items"]}>
                {props.options.map((item, index) => (
                    <div className={s["filter__entity-item"]} key={index}>
                        <input type="checkbox" defaultChecked={item.active} />
                        <Link href={item.link} key={index}>
                            {item.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
