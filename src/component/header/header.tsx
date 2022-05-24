import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import { NavLink } from "react-router-dom";
import AuthenticationContainer from "../authentication/AuthenticationContainer";

import s from "./header.module.css"
import logophoto from './img/logotext.jpg'

type HeaderType={
    AuthenticationLogout:()=>void
    ChangeViewLoginOpen:()=>void
    ChangeViewLoginClose:()=>void
   
    viewlogin :string
    auth : string
    name:string
    family:string
    login :string
    cartItemCount:number
}

let Header:React.FC<HeaderType> = (props) =>{
    let mailWindow =()=>{
        window.open("http://ya.ru");
    }
    let VkWindow =()=>{
        window.open("https://vk.com/czar_hunt2");
      
    }
    let OdnWindow =()=>{
        window.open("https://ok.ru/tsarskaya");
       
    }
    let YotubeWindow =()=>{
        window.open("https://www.youtube.com/channel/UCWPJrKaf6BRimMAxV8LTMGw");
       
    }
    let LogoutUser =()=>{
        props.AuthenticationLogout()
    }   
    return(
        <div className={s.wrapper}>
                <div className={s.header}>
                    <div className={s.itemheader}><img src={logophoto}/></div>
                    <div className={s.itemheader}>
                   
                        <div> <FontAwesomeIcon className={s.search} icon={['fas','search']}/> поиск по сайту  </div>
                        <div className={s.phone}><span>+(351)774-55-38</span></div>
                    </div>
                    <div className={s.itemheader}>
                        <div className={s.social}>               
                            <div className={s.itemsocial} onClick={mailWindow} > <FontAwesomeIcon icon={['fas', 'envelope']} /> </div>
                            <div className={s.itemsocial} onClick={VkWindow}> <FontAwesomeIcon icon={['fab', 'vk']} /></div>                  
                            <div className={s.itemsocial} onClick={OdnWindow}> <FontAwesomeIcon icon={['fab', 'odnoklassniki']} /></div>
                            <div className={s.itemsocial} onClick={YotubeWindow}> <FontAwesomeIcon icon={['fab', 'youtube']} /></div>                   
                            <div className={s.cart}><NavLink to={"/personal/profile/cart"}><FontAwesomeIcon icon={['fas','cart-plus']}/>   {props.cartItemCount ? <small className={s.cartcount}>{props.cartItemCount}</small>:<small></small>} </NavLink> </div>
                        </div>
                        <div className={s.adress}> <span>г. Челябинск, пр.Победы, 125</span> </div>
                    </div>
                    {!props.auth?
                    <div className={s.itemheader}>
                        <div className={s.cabinet} ><FontAwesomeIcon icon={['fas','door-open']}/> <span> <NavLink to={"/authentication"}> Вход </NavLink> </span> </div>
                      
                     </div> :
                     <div className={s.wrapper_data_user}>
                           {/*  <div className={s.cart}><FontAwesomeIcon icon={['fas','cart-plus']}/>  </div>  */}
                            <div className={s.data_user}> 
                                <div className={s.photo_user}><NavLink to={'/personal'} ><FontAwesomeIcon className={s.icon_user} icon={['fas','user']}/><small>{props.login}</small></NavLink></div>
                                <div className={s.name_family}>
                                  {/*  <div>{props.login} </div> */}
                                    <div onClick={props.AuthenticationLogout}><FontAwesomeIcon icon={['fas','door-open']} /> <span>Выход </span></div>                                   
                                </div>       
                             </div>
                     </div>   

                    }                   
                    
           </div>   
       {/*   {props.viewlogin && <AuthenticationContainer/>  }     */}
        </div>
    )
}
export default Header