import logo from './logo.svg';
import {initializedThuncAC} from './redux/appReducer'
import React from 'react'
import { connect } from 'react-redux';
import HeaderContainer from './component/header/HeaderComponent'
import NavBarContainer from './component/navBar/navBarContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faCoffee,fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'

import s from './app.module.css'
import { Route } from 'react-router-dom';
import AdvertisingContainer from './component/advertising/adverttisingContainer';
import ItemPromoContainer from './component/advertising/itemPromo';
import CompanyContainer from './component/company/CompanyContainer';
import ArmoryWorkshopContainer from './component/workshop/WorkshopContainer';
import CatalogContainer from './component/catalog/catalogContainer';
import FooterContainer from './component/footer/FooterContainer';
import ContactContainer from './component/contact/ContactContainer';
import DeliveryContainer from './component/delivery/DeliveryContainer';
import ComplexContainer from './component/complex/ComplexContainer';
import VideoContainer from './component/video/VideoContainer';
import AuthenticationContainer from './component/authentication/AuthenticationContainer';
import RegistrationContainer from './component/registration/RegistrationContainer';
import Personal from './component/personal/personal';
import ProfileContainer from './component/personal/profile/profile';
import { Function3, Main } from './component/student/student';
import CartContainer from './component/cart/cartContainer';
import { Mains } from './component/student/studets';
import { withAuthRedirect } from './hoc/withAuthredirect';

library.add(fab,faCheckSquare, faCoffee, fas)

class App extends React.Component {
  componentDidMount(){
    console.log(this.props);
  }
    render(){
      return(
        <div className={s.content}>
          <div className={s.wrapper}>
              <HeaderContainer/>
              <NavBarContainer/> 
           
              
              <Route path ="/workshop" render={()=><ArmoryWorkshopContainer/>}/>
              <Route path="/company" render={()=><CompanyContainer/>}/>
              <Route exact path="/promo" render={()=><AdvertisingContainer/>}/> 
              <Route path="/promo/elem/:id?" render={()=><ItemPromoContainer/>}/>
              <Route path={"/catalog"} render={()=> <CatalogContainer/>} /> 
              <Route path={"/delivery"} render={()=><DeliveryContainer/>}  />
              <Route path={"/contact"} render={()=><ContactContainer/>}  />
              <Route path={"/complex"} render={()=><ComplexContainer/>}  />
              <Route path={"/video"}   component={withAuthRedirect(VideoContainer)}  />
              <Route path={"/registration"} render={()=><RegistrationContainer/>}/>
             {/* <Route path = {"/authentication"} render={()=><AuthenticationContainer/>}/> */}
              <Route exact path = {"/personal"} render={()=><Personal/>}/>
              <Route exact path = {"/personal/profile"} component= {withAuthRedirect(ProfileContainer)}/>
              <Route exact path = {"/personal/profile/cart"} render={()=><CartContainer/>}/>

              <Route path = {"/student"} render={()=><Main/>}/>
              <Route path = {"/students"} render={()=><Function3/>}/>
          
          </div>
          
         <Route path = {"/"} render ={()=> <FooterContainer/> }/> 
        </div>
      )
    }
}
let mapStateToProps=(state)=>{
  return{
     initialize:state.AppPage.initialized,
    }
}
//export default App;
export default connect(mapStateToProps,{innitializeAC:initializedThuncAC})(App);
