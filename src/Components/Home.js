import React from "react";
import '../App.css'

const Home = ()=>{
   return(
    <div>
    <div>
        <img className="add-to-cart" src="https://cdn.shopify.com/app-store/listing_images/2b9bba2ab61edabc6d836f14f9377671/icon/CL-Lhc30lu8CEAE=.png"/>
    </div>

    <h1>Welcome to home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://i0.wp.com/maplestore.in/wp-content/uploads/2021/09/MM1L3_AV1.jpg?fit=1144%2C1144&ssl=1"/>
            </div>
            <div className="text-wrapper item">
                <span>
                    I-phone
                </span>
                <span>
                    Price: $1000
                </span>
            </div>
            <div className="btn-wrapper item">
                <button>
                    Add to cart
                </button>
            </div>
        </div>
    </div>
   )
}

export default Home;
