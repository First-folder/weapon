import { ContactReducer } from './contact';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import { AdvertisingReducer } from "./advertising";
import {appReducer} from "./appReducer";
import { CompanyReducer } from "./company";
import { CatalogReducer } from "./catalog";
import { LocationReducer } from "./breadCrumbs";
import { WorkshopReducer } from "./workshop";
import { DeliveryReducer } from './delivery';
import { ComplexReducer } from './complex';
import { VideoReducer } from './video';
import { AuthReducer } from './authentication';
import { RegistrationReducer } from './registration_user';
import { CartReducer } from './cart';
export let currentHost = "https://localhost:3015";
let reducers = combineReducers({
 AppPage : appReducer,
 Company:CompanyReducer,
 Promo:AdvertisingReducer,
 Catalog:CatalogReducer,
 Location:LocationReducer,
 Workshop:WorkshopReducer,
 Contact:ContactReducer,
 Delivery:DeliveryReducer,
 Complex:ComplexReducer,
 Video:VideoReducer,
 Authentication:AuthReducer ,
 RegistrationUserInfo:RegistrationReducer,
 ProductCart:CartReducer
})

type ReducerType = typeof reducers;
export type AppStateType = ReturnType<ReducerType>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));
//@ts-ignore
window.__store__= store;

export default store;
