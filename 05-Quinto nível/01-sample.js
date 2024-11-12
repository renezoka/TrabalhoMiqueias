

function principal() {
    // eslint-disable-next-line no-magic-numbers
    const itens = [10, 20, 30, 40, 50];
    
    const ativo = 1;
    const inativo = 2;
    const multiplicador = 3;
        
    for (let i = 0; i < itens.length; i++) {
        let total = 0;
        total += itens[i] * multiplicador;
    }
    const idUsuario = 42;
    const usuario = obterUsuario(idUsuario);

    const usuarioAtivo = 1;
    const usuarioInativo = 2;
    if (ativo === usuarioAtivo && inativo === usuarioInativo && usuario.ativo === usuarioAtivo) {
        console.log("Usuário está ativo");
    } else {
        console.log("Usuário não está ativo");
    }

    console.log("O total é:", total);
    atualizarDados(usuario);
}

function obterUsuario(id) {
    const idMaria = 43;
    const idJoao = 42;
    if (id === idJoao) {
        return {
            id: 42,
            nome: "João Silva",
            idade: 25,
            ativo: 1
        };
    } else if (id === idMaria) {
        return {
            id: 43,
            nome: "Maria Souza",
            idade: 28,
            ativo: 0
        };
    } else {
        console.log("Usuário não encontrado");
        return null;
    }
}

function salvarDados() {
    console.log("Dados salvos com sucesso!");
}

function atualizarDados(usuario) {
    const idadeMinimaParaAtualizar = 18;
    if (usuario !== null && usuario.idade > idadeMinimaParaAtualizar) {
        console.log("Atualizando usuário:", usuario.id);
        
        salvarDados();

        usuario.idade += 1;
        console.log("Nova idade do usuário:", usuario.idade);
    }
}

function calcular(parametroParaCalculo, numero1, numero2) {
    let resultado = 0;
    const soma = 1;
    const subtracao = 2;
    const multiplicacao = 3; 

    if (parametroParaCalculo === soma) {
        resultado = numero1 + numero2;

    } else if (parametroParaCalculo === subtracao) {
        resultado = numero1 * numero2;

    } else if (parametroParaCalculo === multiplicacao) {
        resultado = numero1 - numero2;

    } else {
        resultado = numero1 / numero2;
    }
    inverterIntParaString(resultado);
}
function inverterIntParaString(int){
    const invertido = int.toString().split("").reverse().join("");
    console.log("String invertida:", invertido);
    return invertido;
}

function processarDados(dados) {
    let resultado = 0;
    const numeroPar = 2;
    
    for (let i = 1; i <= dados; i++) {
        if (i % numeroPar === 0) {
            resultado += i;
        } else {
            resultado -= i;
        }
    }
    console.log("Resultado do processamento:", resultado);

    
    exibirDados();

    return resultado;
}


function mostrarInfo() {
    const valores = ["Dado 1", "Dado 2", "Dado 3"];
    for (let j = 0; j < valores.length; j++) {
        console.log("Info:", valores[j]);
    }
}


function funcao() {
    // eslint-disable-next-line no-magic-numbers
    const itens = [5, 7, 9, 11];
    let total = 0;
    const multiplicador = 3;
    for (let i = 0; i < itens.length; i++) {
        total += itens[i] * multiplicador;
    
    }
    mostrarInfo();
    console.log("Cálculo total:", total);
    return total;
    
}

function exibirDados() {
    const dados = ["Valor 1", "Valor 2", "Valor 3"];
    for (let i = 0; i < dados.length; i++) {
        console.log("Dados:", dados[i]);
    }
}

principal();

const parametroCalculo = 1;
const numero1 = 2;
const numero2 = 3;
console.log("Resultado do cálculo:", calcular(parametroCalculo, numero1, numero2));

const dados = 10;
console.log("Resultado do processamento de dados:", processarDados(dados));
console.log("Resultado da função:", funcao());



