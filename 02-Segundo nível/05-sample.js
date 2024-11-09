function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;

    let salarioComBonus;
    const bonusGerente = 1000;
    const bonusSupervisor = 500;
    const bonusEmpregado = 200;
    if (cargo === "gerente") {
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === "supervisor") {
        salarioComBonus = salarioBase + bonusSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusEmpregado;
    }

    const descontoNoSalario = 300;
    const salarioComDesconto = salarioComBonus - descontoNoSalario;

    let salarioFinal;
    const parametroSalarialAlto = 5000;
    const parametroSalarialBaixo = 3000;
    
    if (salarioComDesconto > parametroSalarialAlt0) {
        const taxaSalarial = 0.27;
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaSalarial);
    } else if (salarioComDesconto > parametroSalarialBaixo) {
        const taxaSalarial = 0.18;
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaSalarial);
    } else {
        const taxaSalarial = 0.11;
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaSalarial);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, "gerente");
console.log(`O salário final é: ${salario}`);
