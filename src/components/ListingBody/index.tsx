import { CartFilter } from '../CartFilter'
import { CartListing } from '../CartListing'
import './styles.css'


export const ListingBody = () => {

    return(
        <div className="listing-body-container">
            <CartFilter />
            <CartListing />
        </div>
    )
}