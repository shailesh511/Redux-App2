import { connect, Connect } from "react-redux";
//Here we are connecting out reactComponent to redux

import Home from "../Components/Home";
import {addToCart} from '../Services/Actions/actions'

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
   addToCartHandler : data => dispatch(addToCart(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);