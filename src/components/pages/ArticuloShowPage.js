import React from 'react';
import { connect } from 'react-redux';

class ArticuloShowPage extends React.Component {
    render() {
        const articulos = this.props.articulos;
        const id = this.props.match.params.id;
        const selectArticulo = articulos.find(articulo => articulo._id === id);
        if (selectArticulo) {
            return (
                <div className="container">
                    <h1>Nombre del articulo:{selectArticulo.titulo}</h1>
                    <hr />
                    <p>{selectArticulo.cuerpo}</p>
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        articulos: state.articulos.items
    };
}

ArticuloShowPage = connect(mapStateToProps)(ArticuloShowPage);
export default ArticuloShowPage;