import React from "react"
import { connect } from "react-redux"
import { ArticleDataType } from "../../redux/company"
import { DeliveryAddArticleThunk } from "../../redux/delivery"
import { AppStateType } from "../../redux/reducer_store"
import { getDeliveryArticleSelector } from "../../redux/Selectors"

import { ArticleItem } from "../company/articles/ArticleItemContainer"
type DeliveryContainerType= {
    DeliveryArticleLoad:(section:string)=>void
    article:Array<ArticleDataType>
}

class DeliveryContainer extends React.Component<DeliveryContainerType>{
    componentDidMount(){
        if(this.props.article.length == 0) this.props.DeliveryArticleLoad("deliveryArticle");
    }
    render(){
        return(
            <div>               
               {this.props.article.length>0 && this.props.article.map(p=><ArticleItem item={p}/>)}
            </div>
        )
    }
}
let mapStateToProps=(state:AppStateType)=>({
    article:getDeliveryArticleSelector(state)
})
export default connect(mapStateToProps,{DeliveryArticleLoad:DeliveryAddArticleThunk})(DeliveryContainer)