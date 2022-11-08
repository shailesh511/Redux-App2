//Here we are connecting out reactComponent to redux

import Home from "../Components/Home";
import { connect } from "react-redux";
import {addToCart, removeToCart} from '../Services/Actions/actions'

const mapStateToProps = state =>({
    data: state
})

const mapDispatchToProps = dispatch =>({
   addToCartHandler : data => dispatch(addToCart(data)),
   removeToCartHandler: data => dispatch(removeToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);