import React from "react";
import "../back/app.js";

const Dashboard = () => {
  return (
    <>
      <div>
        <h1 className="text-center p-2">Seja bem-vindo ao FINANCE</h1>
      </div>

      <div className="text-center p-2">
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                  Adicione seu Nome e Salário
                </h1>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <label htmlFor="nome" className="form-label">
                  Digite seu Nome:
                  <input
                    id="nome"
                    type="text"
                    className="form-control"
                    placeholder="Ex: João, Eduardo..."
                  />
                </label>

                <label htmlFor="salario" className="form-label mt-3">
                  Digite seu Salário:
                  <input
                    id="salario"
                    type="number"
                    className="form-control"
                    placeholder="Ex: R$1600, R$1500..."
                  />
                </label>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => window.salvarRenda()}
                >
                  Salvar
                </button>

                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Adicionar Renda Extra
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                  Adicione sua Renda Extra
                </h1>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="descricaoRendaExtra" className="form-label">
                      Descrição da Renda Extra:
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="descricaoRendaExtra"
                      placeholder="Ex: Freelancer, Salário 2..."
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="valorRendaExtra" className="form-label">
                      Quanto você recebe:
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      id="valorRendaExtra"
                      placeholder="Ex: R$1500, R$150..."
                    />
                  </div>
                </form>
              </div>

              <div id="resultadoRendaExtra" className="text-center"></div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Voltar
                </button>

                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={() => window.salvarRendaExtra()}
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          data-bs-target="#exampleModalToggle"
          data-bs-toggle="modal"
        >
          Adicionar Renda
        </button>
      </div>

      <div className="text-center">
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#modalDespesa"
        >
          Adicionar Despesas
        </button>

        <div
          className="modal fade"
          id="modalDespesa"
          tabIndex="-1"
          aria-labelledby="modalDespesaLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="modalDespesaLabel">
                  Adicione sua Despesa
                </h1>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="tipoDespesa" className="form-label">
                      Tipo da despesa
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="tipoDespesa"
                      placeholder="Ex: Alimentação, aluguel..."
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="valorDespesa" className="form-label">
                      Valor da despesa
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      id="valorDespesa"
                      placeholder="Ex: 150"
                    />
                  </div>
                </form>

                <hr />

                <p id="resultadoGastos"></p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={() => window.salvarGastos()}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center" id="dinheiroRestante"></div>

      <div className="text-center" id="listaDespesas"></div>
    </>
  );
};

export default Dashboard;
