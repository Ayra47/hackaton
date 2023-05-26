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

const productItems = [
    {
        id: 1,
        name: 'Стейк из грудки индейки Индилайт 525г',
        price: '100',
        description: 'вкусный Стейк из грудки индейки Индилайт 525г',
        old_price: '150',
        image: '/images/start-banner/fish.png'
    },
    {
        id: 2,
        name: 'Стейк из грудки индейки Индилайт 525г2',
        price: '100',
        description: 'вкусный сыр',
        image: '/images/start-banner/fish.png'
    },
    {
        id: 3,
        name: 'Стейк Мираторг Black Angus Рибай из мраморной говядины 250г',
        price: '90',
        description: 'вкусный сыр',
        old_price: '190',
        image: '/images/start-banner/fish.png'
    },
    {
        id: 4,
        name: 'Стейк Мираторг Black Angus Рибай из мраморной говядины 250г2',
        price: '90',
        description: 'вкусный сыр',
        old_price: '190',
        image: '/images/start-banner/fish.png'
    },
    {
        id: 5,
        name: 'Стейк Мираторг Black Angus Рибай из мраморной говядины 250г3',
        price: '90',
        description: 'вкусный сыр',
        image: '/images/start-banner/fish.png'
    },
]

export const getCatalogItems = () => {
    return productItems
}

export const getFilterData = () => {
    return filterItems
}
