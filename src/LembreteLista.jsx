import React from "react";

class LembreteLista extends React.Component {
  render() {
    if (this.props.lembretes.length === 0) {
      return (
        <div className="w-100 py-5 d-flex align-items-center justify-content-center rounded bg-dark-subtle">
          <p className="m-0 text-center">Nenhum lembrete adicionado</p>
        </div>
      )
    }

    return (
      <div>
        {this.props.lembretes.map((lembrete) => (
          <li class="p-2 mb-2 d-flex align-items-center justify-content-between rounded bg-dark-subtle">
            <span>{lembrete.titulo}</span>

            <div className="d-flex align-items-center">
              <button
                title="Favoritar"
                class="btn border"
                onClick={() => this.props.aoFavoritar(lembrete)}
              >
                <i
                  className={`fa-star ${lembrete.favorito
                    ? "fa-solid text-warning"
                    : "fa-regular text-secondary"
                    }`}
                />
              </button>

              <button
                title="Remover"
                class="ms-2 btn border"
                onClick={() => this.props.aoRemover(lembrete)}
              >
                <i className="fa-solid fa-trash text-danger" />
              </button>
            </div>
          </li>
        ))}
      </div>
    );
  }
}

export default LembreteLista;
