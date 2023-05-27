import ViewProduct from "@/components/Account/Products/View/ViewProduct";
import CreateButton from "@/components/UI/Buttons/CreateButton";
import Link from "next/link";
import s from "./AddProducts.module.scss";



export default function AddProducts() {
    return (
        <div style={{ display: "flex", flexDirection: "column" }} className="w-container">
            <div className={s["account__container"]}>
                <Link href="/account">
                    <CreateButton color="orange">
                        Вернуться в лк
                    </CreateButton>
                </Link>
                <Link href="/account/products/create">
                    <CreateButton color="orange">
                        Добавить новый товар
                    </CreateButton>
                </Link>
                
                <ViewProduct />
            </div>
        </div>

    )
}