import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticulosAction } from '../../actions/articulo';
import Articulo from '../Articulo';

class ArticulosPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(getArticulosAction());
    }

    render() {
        const articulos = this.props.articulos;
        const articulosItems = articulos.items.map((articulo) =>
            <Articulo key={articulo._id} articulo={articulo} />
        );
        if (articulos.error) {
            return (
                <div>Ocurrio un error al recuperar los articulos</div>
            );
        }
        if (articulos.isFetching) {
            return (
                <div className="container">
                    <h1>Articulos</h1>
                    <hr />
                    <div className="d-flex align-items-center">
                        <strong>Cargando articulos...</strong>
                        <div className="spinner-border text-info ml-auto" role="status" aria-hidden="true"></div>
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                <h1>Articulos</h1>
                <Link to="/articulos/create" className="btn btn-success">Añadir</Link>
                <hr />
                <div className="card-columns">
                    {articulosItems}
                </div>
            </div>
        );
    }
}




const mapStateToProps = (state) => {
    return {
        articulos: state.articulos
    };
}

ArticulosPage = connect(mapStateToProps)(ArticulosPage);
export default ArticulosPage;