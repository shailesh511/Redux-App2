import Header from "../Components/Header";

import { connect, Connect } from "react-redux";

const mapStateToProps = (state)=>({
   data: state
})

const mapDispatchToProps = (dispatch)=>({  
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)