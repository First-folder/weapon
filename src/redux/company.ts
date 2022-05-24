import { ThunkAction } from "redux-thunk";
import { TypeOfTag } from "typescript";
import { ApiCompanyData, ApiPhotosData, DiscountsData } from "../dal/api";
import { AppStateType } from "./reducer_store";

const COMPANY_CERTIFICATE = 'GET_DISCOUNTS_DISCOUNTS';
const ADD_PHOTO_GALLERY = "ADD_PHOTO_GALLERY";
const ADD_PHOTO_ALBUM_ITEMS = "ADD_PHOTO_ALBUM_ITEMS"
const COMPANY_GET_ARTICLES_DISCOUNTS = 'COMPANY_GET_ARTICLES_DISCOUNTS';
const COMPANY_NEWS_ADD = "COMPANY_NEWS_ADD";

let initializeState = {
    сertificate:[] as Array<CertificateType>,
    photoGallery:[] as Array<PhotoGalleryType>,
    //photoTest:[] as Array<AlbumItemsType>,
    articles:[]as Array<ArticleDataType>,
    news:[]as Array<NewsDataType>

   
}
export type PhotoNewsType = {
id:number,
link:string,
name_album:string,
name_photo:string
}
export type NewsDataType={
    id:number,
    topic:string,
    content:string,
    section:string,
    subsection:string,
    photo:Array<PhotoNewsType>
}
export type ArticlesContentType={
    type:string,
    content:string
}
export type  ArticleDataType={
    id:number           | null
    topic:string        | null
    content:Array<ArticlesContentType>  | null
 //  content:string|null
    section:string      | null
    subsection:string   | null
    link: string        | null 
    frontlink:string    |null   
}
export type PhotoItemsType = {
    id:number
    link:string
}
export type PhotoGalleryType = {
            id          : number
            nameAlbum   : string
            link        : string
            items       : Array<PhotoItemsType> 

}
export type CertificateType = {
        id: number | null
        certificateName : string | null
        link : string | null
}
export type InitializeStateType = typeof initializeState
export let CompanyReducer = (state = initializeState,action:ActionType):InitializeStateType =>{
    switch(action.type){
            case COMPANY_NEWS_ADD: return{
               ...state,news:action.news 
            }
            case COMPANY_CERTIFICATE:
            return {...state,сertificate:action.certificateData}
            case COMPANY_GET_ARTICLES_DISCOUNTS:
             //   debugger
                return {...state, articles:[...state.articles].concat(action.articles)}
            case ADD_PHOTO_GALLERY: return {
                ... state, photoGallery: action.photoData
            }
            case ADD_PHOTO_ALBUM_ITEMS:return{
                ...state, photoGallery: [...state.photoGallery.map(p => {
                   // console.log("...state.photoGallery.map");    
                            
                    if(p.nameAlbum == action.albumItems[0].name_album){
                       
                        let arrTepm = {...p}
                       // arrTepm.items = [];
                        action.albumItems.forEach(pi=>{
                            arrTepm.items.push({id:pi.id,
                                                link:pi.link})
                        })
                        return arrTepm
                  }else return p})]
                
               
            }
        
        default:return state    
    }
 
}
type  ActionType = CompanyCertificateAcType | AddPhotoGalleryAcType |addPhotoAlbumItemsAcType | GetgetArticlesType |getNewsACType
type getNewsACType = {
    type:typeof COMPANY_NEWS_ADD
    news:Array<NewsDataType>
}
let getNewsAC = (news:Array<NewsDataType>):getNewsACType=>({type:COMPANY_NEWS_ADD,news});
export let getNewsThunk = ():ThunkType=>async (dispatch)=>{
    let response = await ApiCompanyData.getNews("news");

    dispatch(getNewsAC(response));
}




type GetgetArticlesType = {
    type: typeof COMPANY_GET_ARTICLES_DISCOUNTS
    articles:Array<ArticleDataType>
}
let getArticlesAC = (articles:Array<ArticleDataType>):GetgetArticlesType =>({type:COMPANY_GET_ARTICLES_DISCOUNTS,articles});
export let getArticlesThunksAC = (section:string):ThunkType => 
    async (dispatch)=>{
        let response = await DiscountsData.getDiscountsAll(section)
        //console.log("000");
        //console.log(response);
      //  debugger
        dispatch(getArticlesAC(response))
    
}






type CompanyCertificateAcType = {
    type: typeof COMPANY_CERTIFICATE
    certificateData:Array<CertificateType>
}
let CompanyCertificateAC = (certificateData: Array<CertificateType>):CompanyCertificateAcType=>({type:COMPANY_CERTIFICATE,certificateData});
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
export let CompanyCertificateThunk = ():ThunkType => async (dispatch)=>{
    let response = await ApiCompanyData.getCertificate()
    console.log(response);
    dispatch(CompanyCertificateAC(response))
}



;
type AddPhotoGalleryAcType = {
    photoData: Array<PhotoGalleryType>
    type: typeof ADD_PHOTO_GALLERY
}

let addPhotoGalleryAC = (photoData:Array<PhotoGalleryType>):AddPhotoGalleryAcType=>({type:ADD_PHOTO_GALLERY,photoData})

export let addPhotoGalleryThunk =():ThunkType=>async (dispatch)=>{
    let response = await ApiPhotosData.PhotosAlbumsData()
    console.log("response addPhotoGalleryThunk");
    console.log(response);
    dispatch(addPhotoGalleryAC(response.photosAlbums))


}
type AlbumItemsType = {
    id: number
    link:string
    name_photo:string
    name_album:string
}
type addPhotoAlbumItemsAcType = {
    type: typeof ADD_PHOTO_ALBUM_ITEMS
    albumItems:Array<AlbumItemsType>
    
}
let addPhotoAlbumItemsAC = (albumItems:Array<AlbumItemsType>):addPhotoAlbumItemsAcType=>({type:ADD_PHOTO_ALBUM_ITEMS,albumItems})

export let getPhotosAlbumItemsThunk = (albumName:string):ThunkType =>async (dispatch)=>{
        let response = await ApiPhotosData.getPhotosAlbumsItemsData(albumName)
        console.log("getPhotosAlbumsItemsData_REDUCER_PHOTO_THUNK");
        console.log("response.data  0  .nameAlbum");
        console.log(response.data);
       // debugger
      if (response.data.length > 0)  dispatch(addPhotoAlbumItemsAC(response.data));
    
        console.log("response.data  ");
        console.log(response.data);
       
      //  dispatch(addPhotoAlbumItemsAC(response.data))
}

//Articles

