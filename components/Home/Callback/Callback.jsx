import Link from "next/link";
import s from "./Callback.module.scss";
import CreateButton from "@/components/UI/Buttons/CreateButton";

export default function Callback(){
    return (
        <div className={s.section__callback}>
            <div className={`${s.callback} w-container`}>
                <div className={s.callback__title}>
                    Возникли вопросы? свяжитесь с нами
                </div>
                <Link target={"_blank"} href={'https://t.me/Ayra47'}>
                    <CreateButton size='xxl'>TG</CreateButton>
                </Link>
                <Link target={"_blank"} href={'https://wa.me/+79996239631'}>
                    <CreateButton size='xxl'>WhatsApp</CreateButton>
                </Link>
                <Link href={'mailto:mr.space213@mail.ru'}>
                    <CreateButton size='xxl'>Email</CreateButton>
                </Link>
                <Link href={'tel:+79996239631'}>
                    <CreateButton size='xxl'>Звонок</CreateButton>
                </Link>
            </div>
        </div>
    )
}