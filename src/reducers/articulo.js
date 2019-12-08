import {
    ACTION_REQUEST,
    RECEIVE_ARTICULOS, FAILURE_ARTICULOS,
    CREATE_ARTICULO_SUCCESS,
    DELETE_ARTICULO_SUCCESS,
    UPDATE_ARTICULO_SUCCESS
} from '../actions/index';

export const articulos = (state = { isFetching: false, items: [], error: false, msgError: "" }, action) => {
    switch (action.type) {
        case ACTION_REQUEST:
            return { ...state, isFetching: true };
        case RECEIVE_ARTICULOS:
            return { ...state, isFetching: false, items: action.payload.articulos, error: false, msgError: "" };
        case FAILURE_ARTICULOS:
            return { ...state, isFetching: false, error: true, msgError: action.error };
        case CREATE_ARTICULO_SUCCESS:
            const { _id, titulo, cuerpo } = action.payload;
            return { ...state, isFetching: false, items: [...state.items, { _id, titulo, cuerpo }], error: false, msgError: "" };
        case DELETE_ARTICULO_SUCCESS:
            return { ...state, isFetching: false, items: state.items.filter(articulo => action.payload !== articulo._id), error: false, msgError: "" }
        case UPDATE_ARTICULO_SUCCESS:
            return {
                ...state, isFetching: false, items: state.items.map((articulo) => {
                    if(articulo._id===action.payload._id){
                        return action.payload;
                    }
                    return articulo;
                }), error: false, msgError: ""
            }
        default:
            return state;
    }
}