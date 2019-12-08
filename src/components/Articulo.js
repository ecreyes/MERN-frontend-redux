import React from 'react';
import { Link } from "react-router-dom";

class Articulo extends React.Component {
    render() {
        const { _id, titulo, cuerpo } = this.props.articulo;
        return (
            <div className="card card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{cuerpo}</p>
                <Link className="btn btn-primary" to={"/articulos/"+_id}>Ver</Link>
            </div>
        );
    }
}

export default Articulo;