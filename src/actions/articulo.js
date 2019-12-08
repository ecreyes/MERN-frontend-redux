import {
    REQUEST_ARTICULOS, RECEIVE_ARTICULOS, FAILURE_ARTICULOS,
    CREATE_ARTICULO_REQUEST, CREATE_ARTICULO_SUCCESS, CREATE_ARTICULO_FAILURE,
    DELETE_ARTICULO_REQUEST, DELETE_ARTICULO_SUCCESS, DELETE_ARTICULO_FAILURE,
    UPDATE_ARTICULO_REQUEST, UPDATE_ARTICULO_SUCCESS, UPDATE_ARTICULO_FAILURE
} from './index';
import { getArticulos, addArticulo,deleteArticulo,updateArticulo } from '../requests/ArticuloService';

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
    }, 500);
};


export const createArticuloAction = (articulo) => (dispatch) => {
    dispatch({ type: CREATE_ARTICULO_REQUEST });

    return addArticulo(articulo).then(res => {
        dispatch({ type: CREATE_ARTICULO_SUCCESS, payload: res.data.articulo });
    }).catch(error => {
        dispatch({ type: CREATE_ARTICULO_FAILURE, error })
    });
};

export const deleteArticuloAction = (id) => (dispatch) => {
    dispatch({ type: DELETE_ARTICULO_REQUEST });

    return deleteArticulo(id).then(res => {
        dispatch({ type: DELETE_ARTICULO_SUCCESS, payload: res.data.articulo._id });
    }).catch(error => {
        dispatch({ type: DELETE_ARTICULO_FAILURE, error })
    });
};


export const updateArticuloAction = (id,articulo) => (dispatch) => {
    dispatch({ type: UPDATE_ARTICULO_REQUEST });

    return updateArticulo(id,articulo).then(res => {
        dispatch({ type: UPDATE_ARTICULO_SUCCESS, payload: res.data.articulo });
    }).catch(error => {
        dispatch({ type: UPDATE_ARTICULO_FAILURE, error })
    });
};