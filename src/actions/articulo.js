import { REQUEST_ARTICULOS, RECEIVE_ARTICULOS,FAILURE_ARTICULOS } from './index';
import { getArticulos } from '../requests/ArticuloService';

/*
    ()=>(dispatch)=>{}
    significa que la funcion getArticulosAction no recibe
    parametros y retorna una funcion que recibe como parametro 
    dispatch y hace lo que esta dentro de llaves
*/
export const getArticulosAction = () => (dispatch) => {
    dispatch({ type: REQUEST_ARTICULOS });
    //timeout simulador para añadir retardo
    setTimeout(()=>{
        return getArticulos().then(res=>{
            dispatch({type:RECEIVE_ARTICULOS,payload:res.data});
        }).catch(error=>{
            dispatch({type:FAILURE_ARTICULOS,error});
        });
    },1000);
};