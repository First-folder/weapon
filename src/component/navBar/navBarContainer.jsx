import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import BreadCrumbsContainer from '../breadCrumbs/BreadCrumbsContainer';
import ns from './navBar.module.css';

let NavBar = (props)=>{
    let [activeSection,EditISM] = useState("empty");   
    return(
        <div className={ns.wrapper}>
                <div className={ns.navigation}>
                    <div className={props.pathname ==="/catalog" ? ns.activeitemnavbar: ns.itemnavbar}> <NavLink to="/catalog">Каталог </NavLink> </div> 
                    <div className={props.pathname  ==="/promo" ? ns.activeitemnavbar: ns.itemnavbar}>  <NavLink to="/promo"> Акции   </NavLink></div>
                    <div className={props.pathname  ==="/company" ? ns.activeitemnavbar: ns.itemnavbar}> <NavLink to="/company">Компания</NavLink> </div>
                    <div className={props.pathname  ==="/complex" ? ns.activeitemnavbar: ns.itemnavbar}> <NavLink to="/complex"> Стрелковый Комплекс</NavLink> </div>
                    <div className={props.pathname  ==="/workshop" ? ns.activeitemnavbar: ns.itemnavbar}> <NavLink to="/workshop"> Оружейная мастерская </NavLink></div>
                    <div className={props.pathname  ==="/delivery" ? ns.activeitemnavbar: ns.itemnavbar}> <NavLink to="/delivery"> Доставка и оплата </NavLink></div>
                    <div className={props.pathname  ==="/video" ? ns.activeitemnavbar: ns.itemnavbar}>      <NavLink to="/video"> Видео </NavLink></div>
                    <div className={props.pathname  ==="/contact" ? ns.activeitemnavbar: ns.itemnavbar}>    <NavLink to="/contact"> Контакты </NavLink></div>
                </div>
                <div className={ns.breadCrumbs}>
                    <BreadCrumbsContainer/>
                </div>
      </div>    
    )
}
class NavBarContainer extends React.Component{
    search(){
       let myparams = this.props.location.pathname;        
      //  console.log(myparams);
    }
    componentDidMount(){
     //   console.log("one");
        this.search();      
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        if(this.props.match.params != prevProps.match.params){
        //    console.log("two");
           this.search();
        }

    }
   
    render(){     
        return(<NavBar pathname = {this.props.location.pathname} />)
    }
}
let mapStateToProps=(state)=>({
    initialize:state.AppPage.initialized
})
export default compose(connect(mapStateToProps,{}),withRouter)(NavBarContainer);
