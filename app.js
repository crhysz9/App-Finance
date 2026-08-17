let salarioPrincipal = 0;
let fontes = [];
let despesas = [];

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

function salvarRendaExtra(){
    const tipoFonte = document.getElementById('tipoFonteDeRenda').value;
    
}
//  DESPESAS / GASTOS
function salvarGastos(){
    const tipoDespesa = document.getElementById('tipoDespesa').value;
    const valorDespesa = Number(document.getElementById('valorDespesa').value);
    let novaDespesa = {
        tipo: tipoDespesa,
        valor: valorDespesa
    };
    despesas.push(novaDespesa); //Adicionar na array tlgd
    const total = despesas.reduce((soma, despesa) => soma + despesa.valor, 0);
    const listaDespesas = document.getElementById('listaDespesas'); //seelecionando a div 
    listaDespesas.innerHTML = `Total em Despesas: R$${total.toFixed(2)}<br>Suas Despesas:<br>`; // apareeceer na div listaDespesas
    despesas.forEach(function(despesa) { // percorrer a array e exibir na div
        listaDespesas.innerHTML += `${despesa.tipo} | R$ ${despesa.valor.toFixed(2)}<br>`;
    });
    const listaDespesas2 = document.getElementById('resultadoGastos');
    listaDespesas2.innerHTML = `Total em Despesas: R$${total.toFixed(2)}<br>Suas Despesas:<br>`;
    despesas.forEach(function(despesa){
        listaDespesas2.innerHTML += `${despesa.tipo} | R$ ${despesa.valor.toFixed(2)}<br>`;
    });
    montanteFinal();
}

function montanteFinal(){
    const user = document.getElementById('nome').value;
    const salario = Number(document.getElementById('salario').value)
    const totalDespesas = despesas.reduce((soma, despesa) => soma + despesa.valor, 0);
    let restante = salarioPrincipal - totalDespesas;
    document.getElementById('dinheiroRestante').innerHTML = `Seu Salário: R$${salario}<br>${user}, vai restar R$ ${restante.toFixed(2)} do seu salário este mês.`;
}

//TESTE Modal Bootstrap (Pop-up)

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})