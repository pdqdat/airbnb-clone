import prisma from "@/libs/prismadb";

export default async function getListing() {
    try {
        const listings = await prisma.listing.findMany({
            orderBy: {
                createAt: "desc",
            },
        });

        return listings;
    } catch (error: any) {
        throw new Error(error);
    }
}
