import CatalogItems from "@/components/Catalog/CatalogItems/CatalogItems";
import Filter from "@/components/Catalog/Filter/Filter";
import CatalogLayout from "@/components/Catalog/Layout/CatalogLayout";
import { getCatalogItems, getFilterData } from "@/services/CatalogService";

const GetFilter = () => {
    return getFilterData()
}

const getItems = () => {
    return getCatalogItems();
}

export default function Page() {
    const filterItems = GetFilter();
    const catalogItems = getItems();

    return (
        <CatalogLayout 
            filter={<Filter filter={filterItems} />}
            catalog={<CatalogItems products={catalogItems} />}
        />
    )
}