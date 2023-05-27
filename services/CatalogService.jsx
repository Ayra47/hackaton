import ky from "ky"

const baseApi = ky.create({
    prefixUrl: `${process.env.NEXT_PUBLIC_HOST_API}/api/`
})

const secureApi = (token) =>
    baseApi.extend({
        headers: new Headers({
            authorization: `Bearer ${token}`,
        }),
    });

const filterItems = [
    {
        name: "Овощи, фрукты",
        links: [
            {
                name: 'Овощи',
                link: '/catalog/vegetables'
            },
            {
                name: 'Фрукты',
                link: '/catalog/fruits',
                active: true,
            }
        ]
    },
    {
        name: "Молоко, сыр, яйца",
        links: [
            {
                name: "Рекомендуем!",
                link: '/catalog/dairy/recomendation'
            },
            {
                name: "Сыры",
                link: '/catalog/cheese'
            }
        ]
    },
    {
        name: "Мясо, птица",
        links: [
            {
                name: "Мясо птицы",
                link: '/catalog/meat/poultry',
            },
            {
                name: "Стейки",
                link: '/catalog/meat/steaks',
            },
            {
                name: "Барбекю",
                link: '/catalog/meat/barbecue',
            }
        ]
    }
]

export const getCatalogItems = async(page) => {
    return await baseApi.get(`products?page=${page}`).json();
}

export const getFilterData = () => {
    return filterItems
}

export const createProduct = async(token, model) => {
    return await secureApi(token).post(`products`, {json: model}).json();
}

export const addProduct = async(token, product_id) => {
    return await secureApi(token).post(`cart/item/${product_id}`).json();
}

export const removeProduct = async(token, id) => {
    return await secureApi(token).delete(`cart/item/${id}`).json();
}

export const getCart = async(token) => {
    return await secureApi(token).get(`cart`).json();
}