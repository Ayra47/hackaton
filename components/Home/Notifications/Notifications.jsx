import CreateButton from '@/components/UI/Buttons/CreateButton';
import s from './Notifications.module.scss';
import CreateInput from '@/components/UI/Inputs/CreateInput';
import Link from 'next/link';

export default function Notify() {
    return (
        <div className={s.section__notify}>
            <div className={`${s.notify} w-container`}>
                <div className={s.notify__title}>
                    Подписка на рассылку
                </div>
                <div className="notify__subtitle">
                    Подпишитесь на нашу рассылку и получайте еженедельную подборку лучших товаров
                </div>
                <Link href={'/telebot'}>AgroUnits</Link>
            </div>
        </div>
    )
}