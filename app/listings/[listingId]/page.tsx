import getListingById from "@/actions/getListingById";

// components
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";

interface IParams{
    listingId?:string;
}

const ListingPage=async ({params}:{params:IParams})=>{
    const listing =await getListingById(params);

    if (!listing){
        return(
            <ClientOnly>
<EmptyState/>
            </ClientOnly>
        )
    }

    return(
        <div>
            {listing.title}
        </div>

<ClientOnly>
    <ListingClient
listing={listing}
currentUser={currentUser}
    />
            </ClientOnly>
    )
}

export default ListingPage;