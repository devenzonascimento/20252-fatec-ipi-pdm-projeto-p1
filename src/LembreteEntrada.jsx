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
      <div className="d-flex align-items-center">
        <input
          type="text"
          className="form-control bg-dark-subtle"
          placeholder="Digite seu novo lembrete..."
          value={this.state.tituloDoLembrete}
          onChange={this.aoDigitar}
        />

        <button
          type="button"
          title="Adicionar lembrete"
          class="ms-2 btn btn-primary"
          onClick={this.aoConfirmar}
        >
          <i className="fa-solid fa-plus" />
        </button>
      </div>
    );
  }
}

export default LembreteEntrada;
