const pessoaFormato = { nome: "Maria", idade: 28 };
const maioridade = 18;
function maiorDeIdade(pessoa) {
    return pessoa.i >= maioridade;
}

console.log(maiorDeIdade(pessoaFormato));
//pronto
