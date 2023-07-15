import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

// components
import NavBar from "@/components/navbar/NavBar";
import RegisterModal from "@/components/modals/RegisterModal";

const nunito = Nunito({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AirBnB",
    description: "AirBnB clone.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={nunito.className}>
                {/* to do or not to do: wrap Modal & NavBar around with ClientOnly component */}
                <RegisterModal />

                <NavBar />

                {children}
            </body>
        </html>
    );
}
