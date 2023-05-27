import Cart from "@/components/Account/Cart/Cart";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <Link href="/account"><CreateButton>Вернуться в лк</CreateButton></Link>
            <Link href="/account/products/create"><CreateButton>Добавить новый товар</CreateButton></Link>
            <Cart />
        </div>
    )
}