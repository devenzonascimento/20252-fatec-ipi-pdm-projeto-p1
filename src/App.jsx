import React from "react";
import LembreteLista from "./LembreteLista";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {
  state = {
    lembretes: [],
  };

  aoAdicionar = (tituloDoLembrete) => {
    const lembrete = { titulo: tituloDoLembrete, favorito: false };

    this.state.lembretes.push(lembrete)

    this.setState({ lembretes: this.state.lembretes });
  };

  aoFavoritar = (lembreteParaFavoritar) => {
    const novaListaDeLembretes = this.state.lembretes.map(lembrete => {
      if (lembrete === lembreteParaFavoritar) {
        lembrete.favorito = !lembrete.favorito;
      }

      return lembrete
    })

    this.setState({ lembretes: novaListaDeLembretes });
  };

  aoRemover = (lembreteParaRemover) => {
    const novaListaDeLembretes = this.state.lembretes.filter(
      lembrete => lembrete !== lembreteParaRemover
    )

    this.setState({ lembretes: novaListaDeLembretes });
  };

  render() {
    return (
      <div className="container mt-2">
        <LembreteLista
          lembretes={this.state.lembretes}
          aoFavoritar={this.aoFavoritar}
          aoRemover={this.aoRemover}
        />
        <LembreteEntrada aoAdicionar={this.aoAdicionar} />
      </div>
    );
  }
}

export default App;