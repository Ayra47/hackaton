import CreateButton from '@/components/UI/Buttons/CreateButton';
import s from './Notifications.module.scss';
import CreateInput from '@/components/UI/Inputs/CreateInput';
import Link from 'next/link';

export default function Notify() {
    return (
        <div className={s.section__notify}>
            <div className={`${s.notify} w-container`}>
                <div className={s.notify__title}>
                    Сервис в телеграмме
                </div>
                <div className="notify__subtitle">
                    Общение с фермерами, получение уведомлений о сообщениях и горячих акциях <span>(возможно отключить)</span>
                </div>
                <Link href={'/telebot'}>
                    <CreateButton size='xxl'>AgroUnits</CreateButton>
                </Link>
            </div>
        </div>
    )
}