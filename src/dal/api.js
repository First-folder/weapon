import axios from 'axios';
import { AuthenticationLogoutThunk } from '../redux/authentication';

const instance = axios.create({
    headers:{},
    withCredentials:true,
    baseURL:'https://localhost:3015/',
})

export const DiscountsData = {
    getDiscountsAll(section){
        return instance.post('companyarticles/',{"section":section}).then(response=>{
            return response.data
        })
    }
}
export const ApiCompanyData = {
    getProductSectionAll(){
        return instance.get('productsec/').then(response=>{
            return response.data
        })
    },
   getCertificate(){
       return instance.get('certificate/').then(response=>{
           return response.data.certificate
       })

   } ,
   getNews(nameSection){
       return instance.post('news/',{"section":nameSection}).then(response=>{
            return response.data
       })
   }
}
export const ApiAdverTisingData = {
    AdvertisingAll(){
        return instance.get('advertisingall/').then(response=>{
            return response.data
        })
    }
}
export const ApiPhotosData = {
    PhotosAlbumsData(){
    return instance.get('photosgallery').then(response=>{
        return response.data
    })
    },
    getPhotosAlbumsItemsData(albumName){
        return instance.get('photosalbumitems/'+albumName).then(response=>{
            return response
        })
    }
}
export const ApiCatalogData ={
    getSectionsProductAll(){
        return instance.get('productsec/').then(response=>{
            return response.data.product
    })
},
    getSubSectionsProduct(idSection){
        return instance.get('productsubsection/'+idSection).then(response=>{
            return response.data
        })
    },
    getProductItems(nameSubSection){
        return instance.post('productitems',{"nameSubSection":nameSubSection}).then(response=>{
            return response.data
        })
    }
}
export const ApiWorkShopData = {
    getServiceAll(){
        return instance.post('workshop/').then(response=>{
            return response.data
        })
    },
    getTestCookie(){
        return instance.get('testhttps/').then(response=>{
            return response.data
        })
    }
    
}
export const ApiContactData = {
    getContactAll(){
        return instance.get('contact/').then(response=>{
            return response.data
        })
    }
}
export const ApiDeliveryData= {
    getDeliveryArticle(section){
        return instance.get('delivery/'+section).then(response=>{
            return response.data
        })
    }
}
export const ApiComplexData = {
    getComplexArticles(){
        return instance.get('complexArticles/').then(response=>{
            return response.data
        })
    },
    getComplexService(){
        return instance.get('complexService/').then(response=>{
            return response.data
        })
    },
    getComplexWeapon(){
        return instance.get('complexWeapons/').then(response=>{
            return response.data
        })
    }
}
export const ApiVideoData = {
    
    getVideoClip(){
        return instance.get('video/').then(response=>{
            return response.data
        })
    }
}

export const ApiAuthData = {
    Auth(login,pass){
        return instance.post('authweapon/',{login:login,pass:pass}).then(response=>{
            return response.data
        })
    },
    AuthStatus(){
        return instance.get('authstatus/').then(response=>{
            return response.data
        })
    },
    Registration(name,family,login,pass,mail){
        return instance.post('registration/',{name:name,family:family,login:login,pass:pass,mail:mail}).then(response=>{
            return response.data
        })
    },
    Logout(){
        return instance.get('logout/').then(response=>{
            return response.data
        })
    }
}
export let ApiCartData = {
    DeleteItem(id){
        return instance.post('deleteitemcart/',{id:id}).then(response=>{
            return response.data
        })
    },
    PlusCountItem(id){
        return instance.post('pluscountitem/',{id:id}).then(response=>{
            return response.data
        })
    },
    MinusCountItem(id){
        return instance.post('minuscountitem/',{id:id}).then(response=>{
            return response.data
        })
    },
    ClearCart(){
        return instance.get('clearitem/').then(response=>{
            return response.data
        })
    }
}
