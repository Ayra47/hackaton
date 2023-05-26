import s from "./CatalogLayout.module.scss";

export default function CatalogLayout({ filter, catalog }) {
    return (
        <div className={s["section__catalog-layout"]}>
            <div className={s["catalog-layout"]}>
                <div className={s["catalog-layout__filter"]}>{filter}</div>
                <div className={s["catalog-layout__catalog"]}>{catalog}</div>
            </div>
        </div>
    );
}
