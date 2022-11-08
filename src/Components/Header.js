import React from "react";

const Header = (props) => {
    return (
        <div>
            <div>
                <img className="add-to-cart" src="https://cdn.shopify.com/app-store/listing_images/2b9bba2ab61edabc6d836f14f9377671/icon/CL-Lhc30lu8CEAE=.png" />
            </div>
            <span className="card-count">{props.data.cardItems.length}</span>
       </div>
    )
}

export default Header;