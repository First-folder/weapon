import React from "react"
import { connect } from "react-redux"
import { AppStateType } from "../../redux/reducer_store"
import Footer from "./Footer"
type FooterContainerType = {

}


class FooterContainer extends React.Component<FooterContainerType>{
    render(){
        return(<Footer/> )
    }
}
let mapStateToProps = (state:AppStateType)=>({

})

export default connect(mapStateToProps,{})(FooterContainer)

