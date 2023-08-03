import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

// components
import NavBar from "@/components/navbar/NavBar";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";
import RentModal from "@/components/modals/RentModal";
import ClientOnly from "@/components/ClientOnly";

// providers
import ToasterProvider from "@/providers/ToasterProvider";

// actions
import getCurrentUser from "@/actions/getCurrentUser";

const nunito = Nunito({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AirBnB",
    description: "AirBnB clone.",
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const currentUser = await getCurrentUser();

    return (
        <html lang="en">
            <body className={nunito.className}>
                <ClientOnly>
                    <ToasterProvider />

                    <RegisterModal />
                    <LoginModal />

                    <RentModal />

                    <NavBar currentUser={currentUser} />
                </ClientOnly>

                <div className="pb-20 pt-28">{children}</div>
            </body>
        </html>
    );
}
