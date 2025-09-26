import React from "react";
import LembreteLista from "./LembreteLista";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {
  state = {
    lembretes: [],
    mostrarApenasFavoritos: false,
  };

  aoAdicionar = (tituloDoLembrete) => {
    const lembrete = { titulo: tituloDoLembrete, favorito: false };

    this.state.lembretes.push(lembrete)

    this.setState({
      lembretes: this.state.lembretes,
      mostrarApenasFavoritos: this.state.mostrarApenasFavoritos,
    });
  };

  aoFavoritar = (lembreteParaFavoritar) => {
    const novaListaDeLembretes = this.state.lembretes.map(lembrete => {
      if (lembrete === lembreteParaFavoritar) {
        lembrete.favorito = !lembrete.favorito;
      }

      return lembrete
    })

    this.setState({
      lembretes: novaListaDeLembretes,
      mostrarApenasFavoritos: this.state.mostrarApenasFavoritos,
    });
  };

  aoRemover = (lembreteParaRemover) => {
    const novaListaDeLembretes = this.state.lembretes.filter(
      lembrete => lembrete !== lembreteParaRemover
    )

    this.setState({
      lembretes: novaListaDeLembretes,
      mostrarApenasFavoritos: this.state.mostrarApenasFavoritos,
    });
  };

  aoAlternarFiltro = () => {
    this.setState({
      lembretes: this.state.lembretes,
      mostrarApenasFavoritos: !this.state.mostrarApenasFavoritos,
    });
  };

  filtrarListaDeLembretes = (todosLembretes) => {
    return todosLembretes.filter(lembrete => {
      if (this.state.mostrarApenasFavoritos) {
        return lembrete.favorito
      }

      return true
    })
  }

  render() {
    return (
      <div className="container mt-5">
        <div class="d-flex justify-content-end mb-4">
          <button
            type="button"
            className={`btn btn-primary ${this.state.mostrarApenasFavoritos
              ? "bg-warning border-warning"
              : "bg-secondary border-secondary"
              }`}
            onClick={this.aoAlternarFiltro}
          >
            Apenas favoritos
          </button>
        </div>

        <LembreteLista
          lembretes={this.filtrarListaDeLembretes(this.state.lembretes)}
          aoFavoritar={this.aoFavoritar}
          aoRemover={this.aoRemover}
        />

        <LembreteEntrada aoAdicionar={this.aoAdicionar} />
      </div>
    );
  }
}

export default App;
