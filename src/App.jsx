import React from "react";
import LembreteLista from "./LembreteLista";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {
  state = {
    lembretes: [],
  };

  aoAdicionar = (lembrete) => {
    this.setState({ lembretes: [lembrete, ...this.state.lembretes] });
  };

  render() {
    return (
      <div className="container mt-2">
        <LembreteLista
          lembretes={[
            { id: 1, titulo: "Preparar aula de programação", favorito: true },
            { id: 2, titulo: "Fazer feira", favorito: false },
            { id: 3, titulo: "Preparar marmitas", favorito: false },
          ]}
        />
        <LembreteEntrada aoAdicionar={this.aoAdicionar} />
      </div>
    );
  }
}

export default App;
