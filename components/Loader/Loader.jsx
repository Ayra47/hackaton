import s from "./Loader.module.scss";

export default function Loader() {
    return (
        <div className={s.spinner}>
            <div className={`${s.blob} ${s.top}`}></div>
            <div className={`${s.blob} ${s.bottom}`}></div>
            <div className={`${s.blob} ${s.left}`}></div>
            <div className={`${s.blob} ${s["move-blob"]}`}></div>
        </div>
    );
}
