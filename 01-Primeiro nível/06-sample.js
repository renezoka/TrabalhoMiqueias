const nomeUsuario = "Pedro";
const idadeA = 25;
const atividade = true;

function dadosUsuario(nomeUsuario, idadeA, atividade) {
    if (atividade) {
        console.log(`${nomeUsuario  } tem ${  idadeA  } anos e está ativo.`);
    } else {
        console.log(`${nomeUsuario  } está inativo.`);
    }
}

dadosUsuario(nomeUsuario, idadeA, atividade);
//pronta
