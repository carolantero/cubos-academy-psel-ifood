function solucao(obras) {
	//seu codigo aqui
    let maiorPreco= 0;
    
    for (let item of obras) {
        if (item.valor > maiorPreco) {
            maiorPreco = item.valor;
        }
    }
    for (let indice of obras) {
        if (indice.valor === maiorPreco) {
            console.log (indice.nome);
        }
    }
}