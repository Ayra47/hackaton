"use client";

import { useEffect, useState } from "react"
import { getCookie } from "cookies-next";
import { getCart, getFarmerProducts } from "@/services/CatalogService";
import { CheckUser } from "@/services/AuthService";
import LkCart from "@/components/Account/Cart/LkCart";

export default function ViewProduct() {
    const [products, setProducts] = useState()
    console.log('products', products);

    useEffect(() => {
        (async function() {
            const token = getCookie("jwt")
            const checked = await CheckUser(token)
            if (!checked) {
                deleteCookie("jwt");
                window.location = `${process.env.NEXT_PUBLIC_HOST}/login`
            }
            const service = await getFarmerProducts(token, checked.id)
            if (service.success) {
                setProducts(service.data)
            }
        })()
    }, [])

    return (
        <div>
            <div className="w-container">
                <LkCart products={products} setProducts={setProducts} />
            </div>
        </div>
    )
}