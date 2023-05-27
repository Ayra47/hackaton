import "./globals.scss";
import Header from "../components/Header/Header";
import { cookies } from "next/headers";
import { CheckUser } from "@/services/AuthService";

export const metadata = {
    title: "Units",
    description: "Приложение разработанное командой из Башкирии",
};

const getUser = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("jwt");

    if (token) {
        const service = await CheckUser(token.value);
        return service;
    }

    return 0
};

export default async function RootLayout({ children }) {
    const user = await getUser();

    return (
        <html lang="en">
            <body>
                <Header user={user} />
                <main style={{paddingBottom: "40px"}}>{children}</main>
            </body>
        </html>
    );
}
