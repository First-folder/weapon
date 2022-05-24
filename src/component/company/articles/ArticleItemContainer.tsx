import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "redux"
import { ArticleDataType } from "../../../redux/company"
import { AppStateType, currentHost } from "../../../redux/reducer_store"
import { getCompanyArticlesSelector } from "../../../redux/Selectors"
import ReadComponent from "../helpComponents/ReadComponent"
import s from "../company.module.css"
type ArticleItem = {
    item:ArticleDataType
}

export let  ArticleItem:React.FC<ArticleItem> = (props)=>{
    return(
        <div className={s.wrapper_article_item}>
                <div className={s.frontimg}> {props.item.frontlink != null ? <img src={currentHost+props.item.frontlink}/>: <div>Здесь могла юы быть ваша реклано </div>}  </div>
                <ReadComponent content={props.item.content}/>
               
        </div>
    )
}
type ArticleItemContainerType={
    changeNavigation:(value:boolean)=>void
    match:any
    articles:Array<ArticleDataType>
}


class ArticleItemContainer extends React.Component<ArticleItemContainerType>{
    componentDidMount(){
        this.props.changeNavigation(false);
        debugger
        console.log("ArticleItemContainer  "+this.props.match.params.id)
       // this.searchStateArticleItem(this.props.articles);


    }
    componentWillUnmount(){
        this.props.changeNavigation(true);
    }   
    render(){     
        return(
            <div className={s.wrapper_article_item}>        
              {this.props.articles.length>0 && this.props.articles.map(p=>{if(p.id == this.props.match.params.id) return  <ArticleItem item={p}/>})}          

            </div>
        )
    }
}
let mapStateToProps = (state:AppStateType)=>({
    articles:getCompanyArticlesSelector(state)

})
export default compose<any>(connect(mapStateToProps,{}),withRouter)(ArticleItemContainer)