import React from "react";
import { connect } from "react-redux";
import { ContactThunkAdd, ContactType } from "../../redux/contact";
import { AppStateType } from "../../redux/reducer_store";
import { getContactAllSelector } from "../../redux/Selectors";
import Contacts from "./Contacts";

type ContactContainerType ={
    contactLoad:()=>void,
    contact:Array<ContactType>
}

class ContactContainer extends React.Component<ContactContainerType>{
    componentDidMount(){
       if(this.props.contact.length == 0) this.props.contactLoad()
    }    
    state={       
        mapCurrentPosition:[55.183631, 61.387713]    
    }
    newMapLocation=(coordinates:Array<number>)=>{     
        this.setState({mapCurrentPosition:coordinates});    
  
    }
    render(){
        return(
           <Contacts contact={this.props.contact} mapCurrentPosition={this.state.mapCurrentPosition} newMapLocation={this.newMapLocation}/>           
        )
    }
}
type mapStateToPropsType={
    contact:Array<ContactType>
}
let mapStateToProps=(state:AppStateType):mapStateToPropsType=>({
    contact:getContactAllSelector(state)
})
export default connect(mapStateToProps,{contactLoad:ContactThunkAdd})(ContactContainer);