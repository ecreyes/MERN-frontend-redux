import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteArticuloAction } from '../actions/articulo';

class Articulo extends React.Component {
    render() {
        const { deleteClick } = this.props;
        const { _id, titulo, cuerpo } = this.props.articulo;
        return (
            <div className="card card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{cuerpo}</p>
                <Link className="btn btn-primary" to={"/articulos/"+_id}>Ver</Link>
                <Link className="btn btn-info" to={"/articulos/edit/"+_id}>Editar</Link>
                <button onClick={()=>deleteClick(_id)} className="btn btn-danger">Eliminar</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteClick: (id) => {
            dispatch(deleteArticuloAction(id));
        }
    };
}

Articulo = connect(null,mapDispatchToProps)(Articulo);
export default Articulo;