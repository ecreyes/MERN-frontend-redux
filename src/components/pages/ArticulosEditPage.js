import React from 'react';
import ArticuloForm from '../ArticuloForm';

class ArticulosEditPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Formulario editar articulo</h1>
                <hr />
                <ArticuloForm form="update" />
            </div>
        );
    }
}

export default ArticulosEditPage;