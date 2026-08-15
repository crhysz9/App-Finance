let salarioPrincipal = 0;
let fontes = [];
let despesas = 0;

function salvarNome(){
    const nome = document.getElementById('nome').value;
    document.getElementById('resultado').textContent = `Olá, ${nome}`;
}

function salvarSalario(){
    const salario = document.getElementById('salario').value;
    salarioPrincipal = Number(salario);
    document.getElementById('resultadoSalario').textContent = `Salario R$${salarioPrincipal.toFixed(2)}`;
    montanteFinal()
}

function salvarGastos(){
    const gastostotal = document.getElementById('gastos').value;
    despesas = Number(gastostotal);
    document.getElementById('resultadoGastos').textContent = `Seus Gastos: R$${despesas.toFixed(2)}`;
    montanteFinal()
}

function montanteFinal(){
    const user = document.getElementById('nome').value;
    let restante = salarioPrincipal - despesas;
    document.getElementById('dinheiroRestante').textContent = `${user}, vai restar R$${restante.toFixed(2)} este mês.`;
}


//TESTE Modal Bootstrap (Pop-up)

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})