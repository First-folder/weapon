
import { AppStateType } from "./reducer_store"

//company 
export const getPromoAll = (state:AppStateType) =>              {return state.Promo.advertising}
export const getCompanyCertificateSelector =(state:AppStateType)=>      {return state.Company.сertificate}
export const getCompanyPhotosAlbumsSelector = (state:AppStateType)=>    {return state.Company.photoGallery}
export const getCompanyArticlesSelector=(state:AppStateType)=>{return state.Company.articles}
export const getCompanyPhotoComplexSelector=(state:AppStateType)=>{return state.Company.photoGallery}
export const getCompanyNewsSelector=(state:AppStateType)=>{return state.Company.news}

// catalog
export const getCatalogSectionsAllSelector = (state:AppStateType)=>{return state.Catalog.sections }

//location
export const getMy_location_changes = (state:AppStateType) =>{return state.Location.my_location_changes}
// workshop
export const getWorkShopServiceAllSelector = (state:AppStateType) =>{return state.Workshop.service}
//contact 
export const getContactAllSelector = (state:AppStateType)=>{return state.Contact.contact}
//delivery
export const getDeliveryArticleSelector = (state:AppStateType)=>{return state.Delivery.article}
//complex
export const getComplexArticlesSelector = (state:AppStateType)=>{return state.Complex.articles}
export const getComplexServiceSelector = (state:AppStateType)=>{return state.Complex.service}
export const getComplexWeaponsSelector = (state:AppStateType)=>{return state.Complex.weapons}
//video
export const getVideoAddVideoClipSelector = (state:AppStateType)=>{return state.Video.videoClip}
//authentications
export const getAuthenticationStatusSelector = (state:any)=>{return state.Authentication.auth}
export const getAuthenticationNameSelector = (state:any)=>{return state.Authentication.name}
export const getAuthenticationFamilySelector = (state:any)=>{return state.Authentication.family}
export const getAuthenticationMailSelector = (state:any)=>{return state.Authentication.mail}
export const getAuthenticationPhoneSelector = (state:any)=>{return state.Authentication.phone}
export const getAuthenticationLoginSelector = (state:any)=>{return state.Authentication.login}
//registration
export const getRegistrationLoginSelector = (state:AppStateType)=>{return state.RegistrationUserInfo.login}
export const getRegistrationPassSelector = (state:AppStateType)=>{return state.RegistrationUserInfo.pass}
export const getRegistrationFamilySelector = (state:AppStateType)=>{return state.RegistrationUserInfo.family}
export const getRegistrationNameSelector = (state:AppStateType)=>{return state.RegistrationUserInfo.name}
export const getRegistrationMailSelector = (state:AppStateType)=>{return state.RegistrationUserInfo.mail}
export const getRegistrationPhoneSelector = (state:AppStateType)=>{return state.RegistrationUserInfo.phone}
//cart 
export const getCartReadItemsSelector = (state:AppStateType)=>{return state.ProductCart.cart}
export const getCartItemsCountSelector = (state:AppStateType)=>{return state.ProductCart.cart.length}
