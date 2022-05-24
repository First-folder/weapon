import { composeFa, composeFabc, composeFgabcGa } from "@typescript-fp/compose"
import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "redux"
import { ArticleDataType, getArticlesThunksAC } from "../../../redux/company"
import { AppStateType } from "../../../redux/reducer_store"
import { getCompanyArticlesSelector } from "../../../redux/Selectors"
import ArticleItems from "./ArticleItems"
import s from "../company.module.css"
type ArticleContainerType={
    article:Array<ArticleDataType>
    changeNavigation:(value:boolean)=>void
    LoadArticlesCompany:(value:string)=>void    

}


class ArticleContainer extends React.Component<ArticleContainerType>{
   componentDidMount(){
       this.props.changeNavigation(false);
       let changeLoadArticles = false;
       if(this.props.article.length!=0){
           this.props.article.forEach(p=>{
                if(p.section == "companyArticle") changeLoadArticles = true;
           })
       }
       if(!changeLoadArticles) this.props.LoadArticlesCompany("companyArticle");
   }
   componentWillUnmount(){
        this.props.changeNavigation(true);
   }
    render(){
        return(
            <div className={s.wrapper_all_articles}> {this.props.article.length > 0 && this.props.article.map(p=>{ if(p.section=="companyArticle") return<ArticleItems item={p} />})} </div>
        )
    }
}
let mapStatetoProps = (state:AppStateType)=>({
    article:getCompanyArticlesSelector(state)
})
export default compose<any>(connect(mapStatetoProps,{LoadArticlesCompany:getArticlesThunksAC}),withRouter)(ArticleContainer)