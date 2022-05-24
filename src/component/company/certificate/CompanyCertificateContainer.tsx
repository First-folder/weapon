import React from "react"
import { connect } from "react-redux"
import { Route } from "react-router";
import { NavLink } from "react-router-dom";
import { CertificateType, CompanyCertificateThunk, getPhotosAlbumItemsThunk, PhotoGalleryType, PhotoItemsType } from "../../../redux/company";
import { AppStateType } from "../../../redux/reducer_store";
import { getCompanyCertificateSelector, getCompanyPhotosAlbumsSelector } from "../../../redux/Selectors";
import SliderContainer from "../../slider/SliderContainer";
import s from './certificate.module.css'

type CertificateItemPropsType={
    id: number | null
  
    link:string | null
}
let CertificateItem:React.FC<CertificateItemPropsType> = (props)=>{
    
    return(<NavLink to={'/company/certificate/'+props.id+'/'+'Сертификаты/'+'slider'} >
                <div className={s.certificate_item}>
                {props.link != null? <img src={props.link}/>:console.log("op op")}
                {props.id!=null && <div>{props.id}</div>}
                </div>
         </NavLink>
    )
}

type PropsType={
    CompanyCertificate:()=>void
    PhotoCertificatesLoad:(nameAlbum:string)=>void
    photoAlbums: Array<PhotoGalleryType>
}
class CompanyCertificateContainer extends React.Component<PropsType>{
    componentDidMount(){
        let searchAlbum = false
        if(this.props.photoAlbums.length > 0 ){
            this.props.photoAlbums.forEach(p=>{
                if(p.nameAlbum == 'Сертификаты'){
                     if(p.items.length >0) {searchAlbum = true 
                                            this.setState({certificates:p.items})
                                            }
                }})
        }    
        if(!searchAlbum) this.props.PhotoCertificatesLoad("Сертификаты")
    }
    componentDidUpdate(prevProps:PropsType){
        if(prevProps.photoAlbums != this.props.photoAlbums){
            if(this.props.photoAlbums.length > 0){
                this.props.photoAlbums.forEach(p=>{
                    if(p.nameAlbum == "Сертификаты"){this.setState({certificates:p.items})}
                })
            }
        }
    }
    state={
        certificates:[] as Array<PhotoItemsType> 
    }
    render(){
        return(
            <div>
                 <p>Сертификаты соответствия - это документы, подтверждающие соответствие всем соответствующим требованиям в министерских законах текущего государства, установленными в обязательном порядке.</p>
                <div className={s.wrapper}>
                    {this.state.certificates.length > 0 && this.state.certificates.map(p => <CertificateItem id = {p.id}  link ={p.link}/>)}
                </div>                
                <Route path={'/company/certificate/:id?/:nameAlbum?/slider'} component = {SliderContainer} />
            </div>
        )
    }
}

let mapStateToProps =(state:AppStateType)=>({
    photoAlbums:getCompanyPhotosAlbumsSelector(state)
})

export default connect (mapStateToProps,{CompanyCertificate     : CompanyCertificateThunk,
                                            PhotoCertificatesLoad    :getPhotosAlbumItemsThunk,})(CompanyCertificateContainer);