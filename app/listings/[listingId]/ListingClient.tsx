import { Listing, Reservation } from "@prisma/client"

// types
import { SafeUser } from "@/types";

interface ListingClientProps{
    reservations?:Reservation[];
    listing:Listing&{
        user: SafeUser;
    };
    currentUser:SafeUser|null;
}

const ListingClient:React.FC<ListingClientProps> = ({
    listing,currentUser
}) => {
  return (
    <div>ListingClient</div>
  )
}

export default ListingClient