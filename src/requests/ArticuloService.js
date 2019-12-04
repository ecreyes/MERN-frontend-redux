import { API_URL } from './config';
import axios from 'axios';

export const getArticulos = () => {
    let url = `${API_URL}/articulos`;
    return axios.get(url);
}

/*
    getArticulosById("5ddb1fea4d68ae28b87cf98c").then(res=>{
        console.log(res.data);
    }).catch(error=>console.log(error));
*/
export const getArticulosById = (id) => {
    let url = `${API_URL}/articulo/${id}`;
    return axios.get(url);
}

/*
    addArticulo({titulo:"nose",cuerpo:"hola"}).then(res=>{
        console.log(res);
    }).catch(error=>console.log(error));
*/
export const addArticulo = (articulo) => {
    let url = `${API_URL}/articulo`;
    return axios.post(url, articulo);
}

/*
    deleteArticulo("5ddb236d4d68ae28b87cf996").then(res=>{
        console.log(res.data);
    }).catch(error=>console.log(error));
*/
export const deleteArticulo = (id) => {
    let url = `${API_URL}/articulo/${id}`;
    return axios.delete(url);
}


/*
    updateArticulo("5ddb1fea4d68ae28b87cf98c",
    {titulo:"nose actualizado",cuerpo:"hola actualizado"}).then(res=>{
        console.log(res.data);
    }).catch(error=>console.log(error));
*/
export const updateArticulo = (id, articulo) => {
    let url = `${API_URL}/articulo/${id}`;
    return axios.put(url, articulo);
}