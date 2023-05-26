import CatalogItems from "@/components/Catalog/CatalogItems/CatalogItems";
import Filter from "@/components/Catalog/Filter/Filter";
import CatalogLayout from "@/components/Catalog/Layout/CatalogLayout";
import { getCatalogItems, getFilterData } from "@/services/CatalogService";

const GetFilter = () => {
    return getFilterData()
}

const getItems = async(page) => {
    if (!page) {
        page = 1;
    }
    const service = await getCatalogItems(page);
    return await service[0];
}

export default async function Page({searchParams}) {
    const filterItems = GetFilter();
    const catalogItems = await getItems(searchParams.page);

    return (
        <CatalogLayout 
            filter={<Filter filter={filterItems} />}
            catalog={<CatalogItems currentPage={searchParams.page} totalPages={catalogItems.total_pages} products={catalogItems.data} />}
        />
    )
}