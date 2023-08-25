// actions
import getCurrentUser from "@/actions/getCurrentUser";
import getListingById from "@/actions/getListingById";

// components
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import ListingClient from "./ListingClient";

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingById(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <ListingClient listing={listing} currentUser={currentUser} />
        </ClientOnly>
    );
};

export default ListingPage;
