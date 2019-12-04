import { REQUEST_ARTICULOS, RECEIVE_ARTICULOS, FAILURE_ARTICULOS } from '../actions/index';

export const articulos = (state = { isFetching: false, items: [], error:false,msgError:"" }, action) => {
    switch (action.type) {
        case REQUEST_ARTICULOS:
            return {...state,isFetching:true}; 
        case RECEIVE_ARTICULOS:
            return {...state,isFetching:false,items:action.payload.articulos,error:false,msgError:""};
        case FAILURE_ARTICULOS:
            return {...state,isFetching:false,error:true,msgError:action.error};
        default:
            return state;
    }
}