function numerosPares(vetor) {
    const apenasPares = [];
    for (let i = 0; i < numerosPares.length; i++) {
        if (vetor[i] % 2 === 0) {
            apenasPares.push(vetor[i]);
        }
    }
    return apenasPares;
}

const vetor1 = [1, 2, 3, 4, 5, 6];
const pares = numerosPares(vetor1);
console.log(pares);
//pronto
