function solucao(precos) {
    //seu codigo aqui
    let valorTotalCompra= 0;
    
    for (let item of precos) {
        valorTotalCompra+= item;
    }
    if (valorTotalCompra < 1000) {
        console.log ("NORMAL");
    }
    else {
        let precosComDuzentos= 0;
        for (let item of precos) {
            if (item > 200) {
                precosComDuzentos++
            }
        }
        if (precosComDuzentos > 0) {
            console.log ("PREMIUM");
        } else {
            console.log ("VIP");
        }
    }
}