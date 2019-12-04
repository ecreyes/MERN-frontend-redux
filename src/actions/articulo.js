import { REQUEST_ARTICULOS, RECEIVE_ARTICULOS, FAILURE_ARTICULOS, CREATE_ARTICULO_REQUEST, CREATE_ARTICULO_FAILURE, CREATE_ARTICULO_SUCCESS } from './index';
import { getArticulos, addArticulo } from '../requests/ArticuloService';

/*
    ()=>(dispatch)=>{}
    significa que la funcion getArticulosAction no recibe
    parametros y retorna una funcion que recibe como parametro 
    dispatch y hace lo que esta dentro de llaves
*/
export const getArticulosAction = () => (dispatch) => {
    dispatch({ type: REQUEST_ARTICULOS });
    //timeout simulador para añadir retardo
    setTimeout(() => {
        return getArticulos().then(res => {
            dispatch({ type: RECEIVE_ARTICULOS, payload: res.data });
        }).catch(error => {
            dispatch({ type: FAILURE_ARTICULOS, error });
        });
    }, 1000);
};


export const createArticuloAction = (articulo) => (dispatch) => {
    dispatch({ type: CREATE_ARTICULO_REQUEST });
    
    return addArticulo(articulo).then(res => {
        dispatch({type:CREATE_ARTICULO_SUCCESS,payload:res.data});
    }).catch(error => {
        dispatch({ type: CREATE_ARTICULO_FAILURE,error })
    });
}