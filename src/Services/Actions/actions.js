import  {ADD_TO_CART} from '../constants'
//action sends data from react to Store

export const addToCart= (data)=>{
    return {
        type: ADD_TO_CART,
        data: data
    }
}


export const removeToCart = (data) => { 
   
}