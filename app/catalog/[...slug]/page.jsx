import CatalogItems from "@/components/Catalog/CatalogItems/CatalogItems";
import Filter from "@/components/Catalog/Filter/Filter";
import CatalogLayout from "@/components/Catalog/Layout/CatalogLayout";
import { getFilterData } from "@/services/CatalogService";

const GetFilter = () => {
    return getFilterData()
}

export default function Page() {
    const filterItems = GetFilter();

    return (
        <CatalogLayout 
            filter={<Filter filter={filterItems} />}
            catalog={<CatalogItems />}
        />
    )
}