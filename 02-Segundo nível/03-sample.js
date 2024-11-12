function calcularFrete(distancia) {
    const valorFrete = 10;
    return distancia * valorFrete;
}

const frete = calcularFrete(50);
console.log(`O valor do frete é: ${frete}`);
