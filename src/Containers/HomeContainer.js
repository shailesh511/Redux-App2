//Here we are connecting out reactComponent to redux

import Home from "../Components/Home";
import { connect } from "react-redux";
import {addToCart} from '../Services/Actions/actions'

const mapStateToProps = state =>({
    data: state
})

const mapDispatchToProps = dispatch =>({
   addToCartHandler : data => dispatch(addToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);