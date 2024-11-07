function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    let salarioComBonus;
    let bonusGerente = 1000
    let bonusSupervisor = 500
    let bonusEmpregado = 200
    if (cargo === 'gerente') {
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === 'supervisor') {
        salarioComBonus = salarioBase + bonusSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusEmpregado;
    }

    let descontoNoSalario = 300
    const salarioComDesconto = salarioComBonus - descontoNoSalario;

    let salarioFinal;
    let parametroSalarialAlto = 5000;
    let parametroSalarialBaixo = 3000;
    
    if (salarioComDesconto > parametroSalarialAlt0) {
        let taxaSalarial = 0.27;
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaSalarial);
    } else if (salarioComDesconto > parametroSalarialBaixo) {
        let taxaSalarial = 0.18;
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaSalarial);
    } else {
        let taxaSalarial = 0.11;
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaSalarial);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, 'gerente');
console.log(`O salário final é: ${salario}`);
