import "./globals.scss";
import Header from "../components/Header/Header";

export const metadata = {
    title: "Units",
    description: "Приложение разработанное командой из Башкирии",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header user={true} />
                <main>{children}</main>
            </body>
        </html>
    );
}
