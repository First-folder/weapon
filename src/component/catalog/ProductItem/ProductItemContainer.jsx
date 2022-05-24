import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { render } from "@testing-library/react"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "redux"
import { cartAddItemInCartAC, cartAddItemInCartThunk } from "../../../redux/cart"
import { getCatalogSubSectionsAddItemsThunk, getCatalogSubSectionThunk } from "../../../redux/catalog"
import { AppStateType } from "../../../redux/reducer_store"
import { moneyFormat } from "../../../redux/secondary_function"
import { getCatalogSectionsAllSelector } from "../../../redux/Selectors"
import s from "./productItem.module.css"
let Item =(props)=>{
    //debugger
    let byItem = ()=>{
        console.log("AddItemInCart");
        props.AddItemInCart({            
                id:     props.id,
                name:   props.name,
                link:   props.link,
                price:  props.price,
                manufacturer:   props.manufacturer,
                specification:  props.specification,
                description:    props.description,
                count:          1
            }
        )
    }
    if (props.specification != null){console.log(props.specification.match(/[А-Яа-я_A-Za-z0-9,-,:,\s,(,)]*\./g))};
    return(
        <div className={s.wrapper}>
            {props.name !=null? <div> <h1>{props.name}</h1> </div>:<div>null name</div>}
            <div className={s.wrapperImgPrice}>
                <div className={s.photo}> <img src={props.link}/></div>
                <div className={s.wrapper_price_by}>
                      {props.price != null ? <div className={s.price}> {moneyFormat(props.price)} руб.</div>:<div></div>}
                      <div className={s.byItem} onClick={byItem} > <FontAwesomeIcon className={s.byItemIcon} icon={['fas','shopping-cart']}/> Купить</div>
               </div>
            </div>
            {props.specification != null &&
            <div className={s.description}>
                <div> <h4>Характеристики :</h4> </div>
                <div>{props.specification.match(/[А-Яа-я_A-Za-z0-9,-,:,\s,(,)]*\./g).map(p=> <div>{p}</div>)} </div>
            </div>}
            {props.description != null &&
            <div className={s.description}>
                <div><h4>Описание : </h4></div>
                <div>{props.description}</div>
            </div>}
           
        </div>
    )
}

class ProductItermContainer extends React.Component{
    componentDidMount(){
        console.log(this.props.match);
        //search item in catalog
       this.props.smallNav();
    
         let res = this.searchItem()
            console.log(res);          
            if (res.result == false){
                this.props.getSubSection(this.props.match.params.sectionId);              
                  let queryDataItem = ()=> {
                                                this.props.getAddItems(this.props.match.params.subsectionId);
                                            }
                setTimeout(queryDataItem,200);
               
            }
      
    
    }
    componentDidUpdate(prevProps){
        if(prevProps.catalog != this.props.catalog){
            let res=   this.searchItem() ;                 
            console.log(res);
        }
    }
    searchItem=()=>{     
        let resultSearch = false;
        this.props.catalog.forEach(p=>{
            if (p.id == this.props.match.params.sectionId){
               // this.setState({name:"My focid"})
               if(p.subSections.length>0){
                p.subSections.forEach(pS=>{
                    if(pS.name == this.props.match.params.subsectionId){
                        if(pS.items.length>0){
                            pS.items.forEach(pI=>{
                                if (pI.id == this.props.match.params.productId){
                                    this.setState({name:pI.name,
                                                    link:pI.link,
                                                    price:pI.price,
                                                    manufacturer:pI.manufacturer,
                                                    specification:pI.specification,
                                                    description:pI.description,
                                                    id:pI.id
                                                    })
                                                    resultSearch = true;
                                                    
                                }
                            })
                        }
                    }
                }) 
               }
            }
        })
      if (resultSearch)  {return {result: true}}else return {result:false}
    }
    state = {
        id:null,
        name:null,
        link:null,
        price:null,
        manufacturer:null,
        specification:null,
        description:null,
        count:null
    }
    render(){
        return(<Item      name={this.state.name} 
                          id={this.state.id}  
                          link={this.state.link}
                          price={this.state.price}
                          manufacturer ={this.state.manufacturer}
                          specification= {this.state.specification}
                          description = {this.state.description}
                          count={1}
                          AddItemInCart={this.props.AddItemInCart}/>
        )
    }
}


let mapStateToProps = (state)=>({
    catalog:getCatalogSectionsAllSelector(state)

})
export default compose(connect(mapStateToProps,{getSubSection        : getCatalogSubSectionThunk,
                                                 getAddItems         : getCatalogSubSectionsAddItemsThunk,
                                                 AddItemInCart   : cartAddItemInCartThunk
                                                }),withRouter)(ProductItermContainer)


