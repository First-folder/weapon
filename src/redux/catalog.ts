import Reatc from "react"
import { ThunkAction } from "redux-thunk";
import { ApiCatalogData } from "../dal/api";
import { AppStateType } from "./reducer_store";

const PRODUCT_ADD_PRODUCT = "PRODUCT_ADD_PRODUCT";
const PRODUCT_ADD_SUB_SECTION = "PRODUCT_ADD_SUB_SECTION";
const PRODUCT_ADD_ITEMS = "PRODUCT_ADD_ITEMS"

export type CommentsItemsType = {
    author: string
    date:Date
    articles:string


}
export type ItemsType={
    id:number
    name:string
    description:string
    price:number
    manufacturer:string
    link:string
    comments:Array<CommentsItemsType>

}
export type subSectionsType={
    id: number
    name:string   
    link:string
    items:Array<ItemsType>

}
export type  SectionsType = {
    id:number           | null
    name:string         | null    
    link:string         | null
    description:string | null
    subSections: Array<subSectionsType> 
}
let initializeState = {
    sections:[] as Array<SectionsType>
}

type InitializeStateType = typeof initializeState
export let CatalogReducer = (state = initializeState,action:ActionType):InitializeStateType=>{
    let tempP:SectionsType ;
    let tempsubSections:subSectionsType;
    let tempSections:SectionsType
    switch(action.type){
        case PRODUCT_ADD_PRODUCT: return {...state, sections: action.sections}
        case PRODUCT_ADD_SUB_SECTION: return {...state, sections:state.sections.map(p=>{
        //   debugger
            if (p.id == action.idSection){
               // debugger
               // tempP = JSON.parse( JSON.stringify( p ) );
              //  tempP.subSections = action.subSection
              p.subSections = action.subSection

                return p
            } return p})}
         case  PRODUCT_ADD_ITEMS: return {...state, sections:state.sections.map(p=>{
            tempSections = JSON.parse( JSON.stringify( p ) );

            if (tempSections.subSections.length > 0){              
                tempSections.subSections.map(ps=>{                        
                            if(ps.name == action.nameSubSection){                   
                                ps.items = action.Items                                  
                                    }                   
                    }); 
            }
             return tempSections
         })}  
        default: return state

    }
}
type ActionType = addSectionsProductsACType | addSubSectionAcType | addProductItemsACType
type addSectionsProductsACType = {
    type: typeof PRODUCT_ADD_PRODUCT
    sections:Array<SectionsType>
}

let addSectionsProductsAC = (sections:Array<SectionsType>):addSectionsProductsACType=>({type:PRODUCT_ADD_PRODUCT,sections});
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType> 
export  let getCatalogSectionsThunk =  ():ThunkType => async (dispatch)=>{
    let response = await ApiCatalogData.getSectionsProductAll();
    console.log("catalog response");
    console.log(response);
    dispatch(addSectionsProductsAC(response));


}
type addSubSectionAcType = {
    type:typeof PRODUCT_ADD_SUB_SECTION
    subSection:Array<subSectionsType>
    idSection:number
}
let addSubSectionAC = (subSection:Array<subSectionsType>,idSection:number):addSubSectionAcType=>({type:PRODUCT_ADD_SUB_SECTION,subSection,idSection})

export let getCatalogSubSectionThunk = (idSection:number) : ThunkType => async(dispatch)=>{
   
    let response = await ApiCatalogData.getSubSectionsProduct(idSection);
   // debugger
    dispatch(addSubSectionAC(response,idSection))
   // console.log(response);
}
type addProductItemsACType = {
    type: typeof PRODUCT_ADD_ITEMS
    nameSubSection:string
    Items:Array<ItemsType>
}
let addProductItemsAC=(Items:Array<ItemsType> ,nameSubSection:string):addProductItemsACType=>({type:PRODUCT_ADD_ITEMS,Items,nameSubSection})
export let getCatalogSubSectionsAddItemsThunk = (nameSubSection:string):ThunkType => async (dispatch)=>{
        let response = await ApiCatalogData.getProductItems(nameSubSection);
        
        dispatch(addProductItemsAC(response,nameSubSection))
      //  console.log(response);
}