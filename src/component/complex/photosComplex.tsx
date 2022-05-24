import React, { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { isConstructorDeclaration } from "typescript"
import { PhotoGalleryType } from "../../redux/company"
import s  from "./complex.module.css"
type PhotosComplexType={
    photos:PhotoGalleryType
  
}
let PhotosComplex:React.FC<PhotosComplexType>=(props)=>{
    const newRefs = useRef([]);
    newRefs.current = []

    let [arayRef,EditArrayRef] = useState([])
    let EditRef = (itemRef:HTMLDivElement)=>{
        let tempArrayRef = []
        tempArrayRef = arayRef.slice()
      //  tempArrayRef.push(itemRef);
    //    tempArrayRef.push(itemRef)
        EditArrayRef(tempArrayRef)
      
    }
    let photoRef = (e:never)=>{      
       if(e &&  !newRefs.current.includes(e)) newRefs.current.push(e)
    //  console.log(newRefs)
       
    } 
    let chechRef= ()=>{
        console.log(newRefs.current[0])
    }
    return(
        <div className={s.photos_wrapper}>
           
            {        
        props.photos.items.map(p=>{ 
                                             return <NavLink to={'complex/'+p.id+'/'+'Стрелковый Комплекс/'+'slider'}> <div className={s.item_photos} ref={photoRef} onClick={chechRef}>
                                                        <img src={p.link}></img>
                                                     </div>
                                                     </NavLink>
               
        })}</div>
    )
}
export default PhotosComplex