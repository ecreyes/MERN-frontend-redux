import React from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { createArticuloAction, updateArticuloAction } from '../actions/articulo';

class ArticuloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            cuerpo: ""
        };
        this.handleTituloChange = this.handleTituloChange.bind(this);
        this.handleCuerpoChange = this.handleCuerpoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if(this.props.form==="update"){
            const id = this.props.match.params.id;
            const articulos = this.props.articulos;
            const selectArticulo = articulos.find(articulo => articulo._id === id);
            if (selectArticulo) {
                this.setState({
                    titulo: selectArticulo.titulo,
                    cuerpo: selectArticulo.cuerpo
                });
            }
        }        
    }

    componentDidUpdate(prevProps) {
        if (this.props.form === "update") {
            if (this.props.articulos !== prevProps.articulos) {
                const id = this.props.match.params.id;
                const articulos = this.props.articulos;
                const selectArticulo = articulos.find(articulo => articulo._id === id);
                if (selectArticulo) {
                    this.setState({
                        titulo: selectArticulo.titulo,
                        cuerpo: selectArticulo.cuerpo
                    });
                }
            }
        }
    }


    handleTituloChange(e) {
        this.setState({
            titulo: e.target.value
        });
    }

    handleCuerpoChange(e) {
        this.setState({
            cuerpo: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.form === "update") {
            const id = this.props.match.params.id;
            this.props.dispatch(updateArticuloAction(id, this.state));
        } else {
            this.props.dispatch(createArticuloAction(this.state));
        }
        this.props.history.push('/articulos');
        this.setState({
            titulo: "",
            cuerpo: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="titulo" className="col-sm-2 col-form-label">Titulo</label>
                    <div className="col-sm-10">
                        <input onChange={this.handleTituloChange} value={this.state.titulo} type="text" id="titulo" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cuerpo" className="col-sm-2 col-form-label">Cuerpo</label>
                    <div className="col-sm-10">
                        <textarea onChange={this.handleCuerpoChange} value={this.state.cuerpo} id="cuerpo" className="form-control" />
                    </div>
                </div>
                <input type="submit" className="btn btn-primary float-right" value={this.props.form === "create" ? "Crear" : "Actualizar"} />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        articulos: state.articulos.items
    };
}

ArticuloForm = connect(mapStateToProps)(ArticuloForm);
export default withRouter(ArticuloForm);