import React from "react"
import { ArticlesContentType } from "../../../redux/company"
import HeaderComponent from "./HeaderComponent"
import Headerh2Component from "./headerh2Component"
import MarkerOne from "./markeoneComponent"
import MarkerThree from "./markerThreeComponent"
import MarkerTwo from "./markerTwoComponent"
import TextBolt from "./TexsBoltComponent"
import TextComponent from "./TextComponent"
import TitleComponent from "./TitleComponent"
import TitleTwoComponent from "./TitleTwoComponent"

type ReadComponentType={
    content:Array<ArticlesContentType> | null
    }
    let ReadComponent:React.FC<ReadComponentType> = (props)=>{
        return(
        <div>
                    {props.content!= null && props.content.map(p=>{
                        switch(p.type){
                            case "header"   :return     <HeaderComponent    content={p.content}/>
                            case "text"     :return     <TextComponent      content={p.content}/>
                            case "title"    :return     <TitleComponent     content={p.content}/>
                            case "titletwo" :return     <TitleTwoComponent  content={p.content}/>
                            case "markerone" :return    <MarkerOne          content={p.content}/>
                            case "markertwo" :return    <MarkerTwo          content={p.content}/>
                            case "markerthree":return   <MarkerThree        content={p.content}/>
                            case "textbolt" :return     <TextBolt           content={p.content}/>
                            case "headerh2" :return     <Headerh2Component content ={p.content}/>
                        }
                   
                })} 
        </div>
            
        )
    }

    export default ReadComponent