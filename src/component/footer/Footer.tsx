import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import s from "./footerStyle.module.css"
type FooterType = {
    
}

let Footer:React.FC<FooterType> = (props)=>{
    return(
        <div className={s.wrapper}>
                <div className={s.helpFooter}>
                            <div className={s.contentHelp}>
                                    <div className={s.headerOne}>
                                        <div className={s.consultation}><small>Нужна</small></div>
                                        <div className={s.consultation}><small>Консультация ?</small></div>
                                    </div>
                                    <div className={s.contetntFooter}><p>Если у Вас есть сомнения или вопросы, Вы всегда можете обратиться за консультацией к <br/> нашим менеджерам</p></div>
                                   
                                    <div className={s.question}>Задать вопрос</div>
                                    
                        </div>
               </div>
            <div className={s.content}>
                    <div className={s.navigation_company}>
                       
                        <h5>О компании</h5>
                        <ul>
                            <li>Статьи </li>
                            <li>Отзывы </li>
                            <li>Сертификаты</li>
                            <li>Фотогалерея</li>
                            <li>Новости</li>
                        </ul>
                    </div>
                    <div className={s.navigation_company}>
                        <h5>Помощь</h5>
                        <ul>
                            <li>Доставка и оплата</li>
                            <li>Бренды</li>
                        </ul>
                    </div>
                    <div className={s.contact}>
                        <div className={s.adress}>
                            <div> info@ohota74.ru </div>
                            <div> г.Челябинск пр. Победы д.125 </div>
                            <div> г.Челябинск пр. Ленина д.25 </div>

                        </div>
                        <div className={s.phones}>
                                <div className={s.item}>
                                     <a>+7 (352) 774-55-38 </a>
                                     <div className={s.notes}> Торговый зал пр.Победы,125</div>
                                </div>
                                <div className={s.item}>
                                     <a>+7 (351) 774-55-22</a>
                                    <div className={s.notes}> Офис пр.Победы,125</div>
                                </div>
                                <div className={s.item}>
                                     <a>+7 (351) 263-47-79 </a>
                                    <div className={s.notes}> Офис пр.Ленина,25</div>
                                </div>
                                <div className={s.item}>
                                    <a>+7 (351) 265-88-71</a>
                                    <div className={s.notes}> Торговый зал пр.Ленина,25</div>
                                 </div>
                                <div className={s.call_bott}>
                                    Заказать звонок
                                </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Footer