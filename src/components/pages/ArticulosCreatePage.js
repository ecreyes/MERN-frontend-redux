import React from 'react';
import ArticuloForm from '../ArticuloForm';

class ArticulosCreatePage extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Formulario crear articulo</h1>
                <hr />
                <ArticuloForm form="create"/>
            </div>
        );
    }
}

export default ArticulosCreatePage;