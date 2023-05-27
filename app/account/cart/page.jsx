"use client";

import Cart from "@/components/Account/Cart/Cart";
import { getCart } from "@/services/CatalogService";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

export default function Page() {
    const [products, setProducts] = useState()

    useEffect(() => {
        (async function() {
            const token = getCookie("jwt")
            const service = await getCart(token)
            if (service.success) {
                setProducts(service.data.items)
            }
        })()
    }, [])

    return <Cart setProducts={setProducts} products={products} />;
}
