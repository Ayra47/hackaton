import FarmerInfo from "@/components/Farmer/Info/FarmerInfo";

async function getFarmer(id) {
    
}

export default async function Page({searchParams}) {
    const id = await getItems(searchParams.id);

    return (
        <FarmerInfo />
    )
}