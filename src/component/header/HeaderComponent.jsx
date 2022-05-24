import React from 'react';
import { connect } from 'react-redux';
import s from './header.module.css'
import logophoto from './img/logotext.jpg'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee,fas } from '@fortawesome/free-solid-svg-icons'
import AuthenticationContainer from '../authentication/AuthenticationContainer';
import { getAuthenticationFamilySelector, getAuthenticationLoginSelector, getAuthenticationNameSelector, getAuthenticationStatusSelector, getCartItemsCountSelector } from '../../redux/Selectors';
import { AuthenticationLogoutThunk, StatusAuthThunk } from '../../redux/authentication';
import { Link, NavLink } from 'react-router-dom';
import Header from './header';

library.add(fab,fas)




class HeaderContainer extends React.Component{
    componentDidMount(){
       
        this.props.StatusAuth()
    }
    state = {
        viewlogin : false 
    }
    ChangeViewLoginOpen = ()=>{
        this.setState({viewlogin:true})
    }
    ChangeViewLoginClose = ()=>{
        this.setState({viewlogin:false})
    }
    render(){
        return(<Header   ChangeViewLoginOpen={this.ChangeViewLoginOpen} 
                         ChangeViewLoginClose={this.ChangeViewLoginClose}
                         AuthenticationLogout={this.props.AuthenticationLogout}
                         viewlogin = {this.state.viewlogin}
                         auth = {this.props.auth}
                         name={this.props.name}
                         family={this.props.family}
                         login = {this.props.login}
                         cartItemCount={this.props.cartItemCount}/>
                         
        )
    }
}

let mapStateToProps=(state)=>{
    return{
        auth:getAuthenticationStatusSelector(state),
        name:getAuthenticationNameSelector(state),
        family:getAuthenticationFamilySelector(state),
        login:getAuthenticationLoginSelector(state),
        cartItemCount:getCartItemsCountSelector(state)

    }
}
export default connect(mapStateToProps,{StatusAuth:StatusAuthThunk,AuthenticationLogout:AuthenticationLogoutThunk})(HeaderContainer);