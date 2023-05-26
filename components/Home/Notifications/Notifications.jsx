import CreateButton from '@/components/Buttons/CreateButton';
import s from './Notifications.module.scss';
import CreateInput from '@/components/Inputs/CreateInput';

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
                <CreateInput focus="blue" placeholder='Введите email' />
                <CreateButton color='blue'>Подписаться</CreateButton>
            </div>
        </div>
    )
}