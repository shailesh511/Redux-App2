import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants"

const initialState = {
    cardData: []
}

export default function cardItems(state=initialState, action){//action param : react will take care by itself
    switch (action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cardData: action.data
             }
        break;
        default:
            return state;
    }
}