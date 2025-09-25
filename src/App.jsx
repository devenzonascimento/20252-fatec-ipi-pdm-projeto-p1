import React from "react";
import LembreteEntrada from "./LembreteEntrada";

class App extends React.Component {
  state = {
    lembretes: [],
  };

  aoAdicionar = (lembrete) => {
    this.state.lembretes.push(lembrete)
    
    this.setState({ lembretes: this.state.lembretes });
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
