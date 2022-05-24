import { AppStateType } from './reducer_store';
import { ThunkAction } from 'redux-thunk';
import React from "react";
import { ApiAdverTisingData } from '../dal/api';
const GET_ADVERTISING_DATA = "GET_ADVERTISING_DATA";
export type AdvertisingType = {
            id:                 null | number,
            nameAdvertising:    null | string,
            pictureAdvertising: null | string,
            nameCertificate:    null | string,
            timeLimits:         null | string,
            bodyAdvertising:    null | Array<string>,
            nameBanner:         null | string,
            pictureBanner:      null | string,
            frontalBanner:      null | string,
            active:             boolean
}

type BodyAdvertisingType ={

}
let inializeState = {
    advertising:[
        {
            id:null,
            nameAdvertising:"",
            pictureAdvertising:"",
            nameCertificate:"",
            timeLimits:"",
            bodyAdvertising:[] as Array<string>,
            nameBanner:"",
            pictureBanner:"",
            active:false

        }
    ] as Array<AdvertisingType>
}
export type InitializeStateType = typeof inializeState;
export let AdvertisingReducer = (state = inializeState,action:ActionType):InitializeStateType=>{
        switch (action.type){
            case GET_ADVERTISING_DATA:
                return {...state,advertising:action.data}
            default:return state    
        }

}
type ActionType = GetAdvertisingAllACType
type ThunkType = ThunkAction<Promise<void>,AppStateType,unknown,ActionType>;

type GetAdvertisingAllACType = {
    type: typeof GET_ADVERTISING_DATA
    data: Array<AdvertisingType>
}
const GetAdvertisingAllAC=(data:Array<AdvertisingType>):GetAdvertisingAllACType=>({type:GET_ADVERTISING_DATA,data});

export let SetAdvertisingThunk = ():ThunkType => async (dispatch) =>{
    let response = await ApiAdverTisingData.AdvertisingAll()
    console.log(response);
    dispatch(GetAdvertisingAllAC(response.advertising));
}