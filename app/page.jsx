import HotRecomendation from "@/components/Home/HotRecomendation/HotRecomendation";
import { HomeStartBanner } from "@/services/HomeService";
import Notify from "@/components/Home/Notifications/Notifications";
import { BkgAnimationBox } from "@/components/UI/BkgAnimationBox/BkgAnimationBox";
import StartBanner from "@/components/Home/Start/StartBanner";
import Callback from "@/components/Home/Callback/Callback";

const GetItems = () => {
    return HomeStartBanner()
}

const Page = () => {
    const startBannerItems = GetItems();

    return (
        <div style={{display: "flex", flexDirection: "column", gap: "12px"}}>
            <StartBanner />
            <HotRecomendation products={startBannerItems} />
            {/* <BkgAnimationBox toShow={true} /> */}
            <Notify />
            <Callback />
        </div>
    );
};

export default Page;
