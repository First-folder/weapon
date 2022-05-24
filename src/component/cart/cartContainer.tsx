import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { connect } from "react-redux"
import { addCountItemCartThunk, cartClearCartThunk, cartDeleteItemCartThunk, CartItem, minusCountItemThunk } from "../../redux/cart"
import { AppStateType } from "../../redux/reducer_store"
import { getCartReadItemsSelector } from "../../redux/Selectors"
import Cart from "./Cart"

type CartContainerType={
    cart: Array<CartItem>
    DeleteItemCart: (id:number)=>void
    PlusCountItem: (id:number)=>void
    MinusCountItem: (id:number)=>void
    ClearCart       : ()=>void
}
class CartContainer extends React.Component<CartContainerType>{      
    MinusCountItemProduct=(id:number,count:number)=>{
        if(count >= 2) this.props.MinusCountItem(id)
    }    
    render(){       
        return(
            <Cart cart={this.props.cart} 
                 DeleteItemCart={this.props.DeleteItemCart} 
                 PlusCountItem={this.props.PlusCountItem}  
                 MinusCountItemProduct={this.MinusCountItemProduct} 
                 ClearCart={this.props.ClearCart} />
        )
    }
}
type stateToPropsType={
    cart:Array<CartItem>
}
let mapStateToProps = (state:AppStateType):stateToPropsType=>({
    cart:getCartReadItemsSelector(state)
})
export default connect(mapStateToProps,{DeleteItemCart  : cartDeleteItemCartThunk,
                                        PlusCountItem   : addCountItemCartThunk,
                                        MinusCountItem  : minusCountItemThunk,
                                        ClearCart       : cartClearCartThunk})(CartContainer)