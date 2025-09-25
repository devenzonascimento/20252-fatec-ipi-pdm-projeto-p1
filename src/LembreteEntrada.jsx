import React from "react";

class LembreteEntrada extends React.Component {
  state = {
    tituloDoLembrete: "",
  };

  aoDigitar = (e) => {
    this.setState({
      tituloDoLembrete: e.target.value,
    });
  };

  aoConfirmar = () => {
    this.props.aoAdicionar(this.state.tituloDoLembrete);
    this.setState({ tituloDoLembrete: "" });
  };

  render() {
    return (
      <div className="mt-4 d-sm-flex d-block align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Digite seu novo lembrete..."
          value={this.state.tituloDoLembrete}
          onChange={this.aoDigitar}
        />

        <button
          type="button"
          className="btn btn-primary col-12 mt-2 col-sm-3 ms-sm-2 mt-sm-0"
          onClick={this.aoConfirmar}
        >
          Adicionar
        </button>
      </div>
    );
  }
}

export default LembreteEntrada;
