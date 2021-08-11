function solucao(primeiraLetra, segundaLetra, palavras) {
	//seu codigo aqui
    let resposta= "";
    
    for (let item of palavras) {
        if (item[0] === primeiraLetra && item[1] === segundaLetra) {
            resposta = item;
            console.log (resposta);
        }
    }
    if (resposta === "") {
        console.log ("NENHUMA");
    }
}