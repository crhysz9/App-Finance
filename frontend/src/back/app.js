let salarioPrincipal = 0;
let valorTotalRendaExtra = 0;
let rendaExtra = [];
let despesas = [];

function salvarRenda() {
    const nome = document.getElementById('nome').value;
    const salario = document.getElementById('salario').value;
    
    salarioPrincipal = Number(salario);
    montanteFinal()
}

function salvarRendaExtra() {

    const tipoRenda = document.getElementById('descricaoRendaExtra').value;
    const valorRenda = Number(document.getElementById('valorRendaExtra').value);
    let novaRendaExtra = {
        nome: tipoRenda,
        valor: valorRenda
    };

    rendaExtra.push(novaRendaExtra);

    const totalRendaExtra = rendaExtra.reduce((soma, rendaExtra) => soma + rendaExtra.valor, 0);
    valorTotalRendaExtra = totalRendaExtra;
    const listaRendaExtra = document.getElementById('resultadoRendaExtra');

    listaRendaExtra.innerHTML = "";
    rendaExtra.forEach(function (rendaExtra) {
        listaRendaExtra.innerHTML = `Total de suas Rendas Extras: R$${totalRendaExtra.toFixed(2)}<br>Suas Rendas Extras:<br>${rendaExtra.nome} | ${rendaExtra.valor.toFixed(2)}<br>`;
    });

    montanteFinal();
}
//  DESPESAS / GASTOS
function salvarGastos() {
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
    despesas.forEach(function (despesa) { // percorrer a array e exibir na div
        listaDespesas.innerHTML += `${despesa.tipo} | R$ ${despesa.valor.toFixed(2)}<br>`;
    });

    const listaDespesas2 = document.getElementById('resultadoGastos');

    listaDespesas2.innerHTML = `Total em Despesas: R$${total.toFixed(2)}<br>Suas Despesas:<br>`;
    despesas.forEach(function (despesa) {
        listaDespesas2.innerHTML += `${despesa.tipo} | R$ ${despesa.valor.toFixed(2)}<br>`;
    });

    montanteFinal();
}

function montanteFinal() {
    const user = document.getElementById('nome').value;
    const salario = Number(document.getElementById('salario').value);
    const totalDespesas = despesas.reduce((soma, despesa) => soma + despesa.valor, 0);

    let restante = (salarioPrincipal + valorTotalRendaExtra) - totalDespesas;
    let salarioTotal = salarioPrincipal + valorTotalRendaExtra


    document.getElementById('dinheiroRestante').innerHTML = `Seu Salário Total: R$${salarioTotal}<br>${user}, vai restar R$ ${restante.toFixed(2)} do seu salário este mês.`;
}



// passa as funçoes para o React

window.salvarRenda = salvarRenda;
window.salvarRendaExtra = salvarRendaExtra;
window.salvarGastos = salvarGastos;