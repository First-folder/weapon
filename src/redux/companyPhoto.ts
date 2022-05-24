import React from "react"
import { ThunkAction } from "redux-thunk";
import { ApiPhotosData } from "../dal/api";
import { AppStateType } from "./reducer_store";
const ADD_PHOTO_GALLERY = "ADD_PHOTO_GALLERY";
const ADD_PHOTO_ALBUM_ITEMS = "ADD_PHOTO_ALBUM_ITEMS"
type PhotoItemsType = {
    id:number
    link:string
}
type PhotoGalleryType = {
    id          : number
    nameAlbum   : string
    link        : string
    items       : Array<PhotoItemsType> 
}
let initialize = {
    photoGallery:[{
        id:0,
        nameAlbum:"",
        link:"",
        items:[]

    }] as Array<PhotoGalleryType>,
    photoTest:[{
        id: 0,
        link:"string",
        name_photo:"string",
        name_album:"string  "
    }] as Array<AlbumItemsType>
}
type InitializeType = typeof initialize;
export let photoGalleryReducer = (state =initialize, action:ActionType ):InitializeType=>{
    switch (action.type){
        case ADD_PHOTO_GALLERY: return {
            ... state, photoGallery: action.photoData
        }
        case ADD_PHOTO_ALBUM_ITEMS:return{
            ...state, photoTest:action.albumItems
            
           
        }
        default:return state     
    }    
}
type ActionType = AddPhotoGalleryAcType | addPhotoAlbumItemsAcType;
type AddPhotoGalleryAcType = {
    photoData: Array<PhotoGalleryType>
    type: typeof ADD_PHOTO_GALLERY
}

let addPhotoGalleryAC = (photoData:Array<PhotoGalleryType>):AddPhotoGalleryAcType=>({type:ADD_PHOTO_GALLERY,photoData})
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>
 let addPhotoGalleryThunk =():ThunkType=>async (dispatch)=>{
    let response = await ApiPhotosData.PhotosAlbumsData()
    console.log("response addPhotoGalleryThunk");
    //console.log(response);
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

 let getPhotosAlbumItemsThunk = (albumName:string):ThunkType =>async (dispatch)=>{
        let response = await ApiPhotosData.getPhotosAlbumsItemsData(albumName)
        console.log("getPhotosAlbumsItemsData_REDUCER_PHOTO_THUNK");
        console.log("response.data  0  .nameAlbum");
        console.log(response.data[0].name_album);
        console.log("response.data  ");
        console.log(response.data);
     
        dispatch(addPhotoAlbumItemsAC(response.data))
}
