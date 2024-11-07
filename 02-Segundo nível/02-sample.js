function verificarSePodeDirigir(idade) {
    let idadeMinimaLegal = 18
    if (idade >= idadeMinimaLegal) {
        return 'Pode dirigir';
    } else {
        return 'Não pode dirigir';
    }
}

console.log(verificarSePodeDirigir(16));
