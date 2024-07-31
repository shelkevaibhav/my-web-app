import { Photos } from "../Photos";
import { appinit } from "./init"

export const appReducer = (state=appinit ,action) =>{
    switch(action.type){
        case 'UPDATE_PHOTOS':
            return{
                ...state,
                hotos:action.payload
            }
    }
return state;

}
