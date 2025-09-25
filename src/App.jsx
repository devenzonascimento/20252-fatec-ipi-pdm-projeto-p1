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

  render() {
    return (
      <div className="container mt-2">
        <LembreteLista lembretes={this.state.lembretes} />
        <LembreteEntrada aoAdicionar={this.aoAdicionar} />
      </div>
    );
  }
}

export default App;
