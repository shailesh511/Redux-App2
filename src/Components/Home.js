import React from "react";
import '../App.css'

const Home = (props)=>{

    console.warn("Props in home component is ", props.data);
   return(
    <div>
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
            <button onClick={()=>{props.addToCartHandler({price:1000,name:'i phone 11'})}}>
               Add To Cart
            </button>
            </div>
        </div>
    </div>
   )
}

export default Home;
