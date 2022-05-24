import { callbackify } from "node:util"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { NavLink } from "react-router-dom"
import { compose } from "redux"
import { PhotoGalleryType, PhotoItemsType, PhotoNewsType } from "../../redux/company"
import { AppStateType } from "../../redux/reducer_store"
import { getCompanyPhotosAlbumsSelector } from "../../redux/Selectors"
import s from "./slider.module.css"
type SliderContainerType = {
    match:any
    AlbumsPhotos:Array<PhotoGalleryType>
    newsPhotos:Array<PhotoNewsType>
   
}
class SliderContainer extends React.Component<SliderContainerType>{
    private pictureRef = React.createRef<HTMLDivElement>();
    constructor(props:any){
        super(props);
        this.writeRef                = this.writeRef.bind(this)
        this.InstallPositionPicture   = this.InstallPositionPicture.bind(this);
        this.nextPicture              = this.nextPicture.bind(this)
        this.prevPicture              = this.prevPicture.bind(this)
       

    }
    componentDidMount(){
        let strUrlArray = this.props.match.url.match(/\/[a-z]*/g); 
        this.setState({backUrl:strUrlArray[0]})
       // debugger
        console.log("match")
        console.log(this.props.match)
        
       this.props.AlbumsPhotos.length > 0 && this.props.AlbumsPhotos.forEach(p=>{
           p.nameAlbum == this.props.match.params.nameAlbum && this.setState({selectAlbum:p.items})
     
        //   p.id == this.props.match.params.id && this.setState({selectPicture:"14"})
       })
      // debugger
       if (this.props.newsPhotos != undefined) {
           if(this.props.newsPhotos.length > 0){
               this.setState({selectAlbum:this.props.newsPhotos})
           }
       }
    
    }
    componentDidUpdate(prevProps:SliderContainerType,prevState:any){
        
      //  if(prevState.selectPicture == this.state.selectPicture) console.log("777")
        if(this.state.selectAlbum != prevState.selectAlbum){
           
            let i1= 0
            this.state.selectAlbum.forEach(p=>{
               
                if(p.id == this.props.match.params.id){             
                    this.setState({selectPicture:i1});                
                }
                i1++;
            }) 
        }
        if(prevState.selectPicture != this.state.selectPicture){
            //debugger
            let changesPosition = -900 * this.state.selectPicture
           if((this.pictureRef.current != undefined) && (this.pictureRef.current != null)){ this.pictureRef.current.style.left = changesPosition +"px"
            }
           
        }
    }
    state={
        selectAlbum:[] as Array<PhotoItemsType>,
        selectPicture:0,
        backUrl:""
    }
    InstallPositionPicture(startPosition:number){
           
    }
    nextPicture(){    
        this.setState({selectPicture:(this.state.selectPicture + 1)})
    }
    prevPicture(){
        this.setState({selectPicture:(this.state.selectPicture - 1)})
    }
    writeRef(e:never){
       
      
     
    }
    render(){
     
        return(
            <div className={s.slider}> 
                 <div className={s.base}>  </div>
                 <div className={s.windowSlider}>
             
                     <div className={s.inner} ref={this.pictureRef} style={{width:this.state.selectAlbum.length * 100+'%'}}>
                            {this.state.selectAlbum.length > 0 ? this.state.selectAlbum.map(p=>{                              
                               return  <div className={s.item} style={{backgroundImage:'url('+p.link+')'}} >{p.id}</div>
                            }): <div style={{color:"white"}}>load picture</div>}
                           
                          
                     </div>       

                   
                 </div>
                 {(((this.state.selectAlbum.length - 1) != this.state.selectPicture) &&(this.state.selectAlbum.length != 0))&& <div className={s.next +" "+ s.size_but} onClick={this.nextPicture}></div>}      
                  {this.state.selectPicture !=0 &&  <div className={s.prev+ " "+s.size_but} onClick={this.prevPicture}></div>  }  
                
                    <NavLink to = {this.state.backUrl}className={s.close+ " "+s.size_but } ></NavLink>
                
            </div>
        )
    }
}
let mapStateToProps = (state:AppStateType)=>({
    AlbumsPhotos:getCompanyPhotosAlbumsSelector(state)
})

export default compose<any>(connect(mapStateToProps,{}),withRouter)(SliderContainer);