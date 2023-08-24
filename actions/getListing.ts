import prisma from "@/libs/prismadb";

export default async function getListing() {
    try {
        const listings = await prisma.listing.findMany({
            orderBy: {
                createAt: "desc",
            },
        });

        // const safeListings = listings.map((listing) => ({
        //     ...listing,
        //     createdAt: listing.createAt.toISOString(),
        // }));

        // return safeListings;
        return listings;
    } catch (error: any) {
        throw new Error(error);
    }
}
