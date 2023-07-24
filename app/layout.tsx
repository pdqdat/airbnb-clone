import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

// components
import NavBar from "@/components/navbar/NavBar";
import RegisterModal from "@/components/modals/RegisterModal";
import LoginModal from "@/components/modals/LoginModal";

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
                {/* to do or not to do: wrap all elements below inside <ClientOnly><ClientOnly/> */}
                <ToasterProvider />

                <RegisterModal />
                <LoginModal />

                <NavBar currentUser={currentUser} />

                {children}
            </body>
        </html>
    );
}
