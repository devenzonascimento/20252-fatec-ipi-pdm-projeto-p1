import React from "react";

class LembreteLista extends React.Component {
  render() {
    return (
      <div className="card">
        {this.props.lembretes.length > 0 ? (
          <ul class="list-group list-group-flush">
            {this.props.lembretes.map((lembrete) => (
              <li class="list-group-item d-flex align-items-center justify-content-between">
                <span>{lembrete.titulo}</span>

                <div className="d-flex align-items-center">
                  <button class="btn btn-light">
                    <i className="fa-solid fa-star" />
                  </button>

                  <button
                    title="Remover"
                    class="ms-2 btn btn-light"
                    onClick={() => this.props.aoRemover(lembrete)}
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-100 py-5 d-flex align-items-center justify-content-center">
            <p className="m-0 text-center">Nenhum lembrete adicionado</p>
          </div>
        )}
      </div>
    );
  }
}

export default LembreteLista;