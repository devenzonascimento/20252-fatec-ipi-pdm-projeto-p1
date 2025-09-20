import React from "react";
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
        <LembreteEntrada aoAdicionar={this.aoAdicionar} />
      </div>
    );
  }
}

export default App;
