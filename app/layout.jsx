import "./globals.scss";
import Header from "../components/Header/Header";

export const metadata = {
    title: "Units",
    description: "Приложение разработанное командой из Башкирии",
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
            </body>
        </html>
    );
}
