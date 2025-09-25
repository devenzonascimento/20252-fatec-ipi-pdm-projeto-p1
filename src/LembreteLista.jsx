import React from "react";

class LembreteLista extends React.Component {
  render() {
    return (
      <div className="card">
        <ul class="list-group list-group-flush">
          {this.props.lembretes.map((lembrete) => (
            <li class="list-group-item d-flex align-items-center justify-content-between">
              <span>{lembrete.titulo}</span>

              <div className="d-flex align-items-center">
                <button class="btn btn-light">
                  <i className="fa-solid fa-star" />
                </button>

                <button class="ms-2 btn btn-light">
                  <i className="fa-solid fa-trash" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LembreteLista;