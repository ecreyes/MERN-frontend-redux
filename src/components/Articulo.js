import React from 'react';

class Articulo extends React.Component {
    render() {
        const {_id, titulo, cuerpo } = this.props.articulo;
        return (
            <div className="card card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{cuerpo}</p>
            </div>
        );
    }
}

export default Articulo;