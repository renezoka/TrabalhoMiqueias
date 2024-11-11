async function buscarPlanetaRecursivo(id) {
    const resposta = await fetch(`https://swapi.dev/api/planets/${id}/`);
    const planeta = await resposta.json();

    try {
        const nomePlaneta = planeta.nome;
    console.log(nomePlaneta);
    } catch (erro) {
        console.log("Não foi poissível encontrar o nome do planeta:", erro);
    }
    buscarPlanetaRecursivo(id + 1);
}

buscarPlanetaRecursivo(1);
