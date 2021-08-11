function solucao(obj) {
	//seu codigo aqui
    if (!obj.jaTomouVacina) {
        if (obj.idade >= 60) {
            console.log ("APTA POR IDADE");
        } else if (obj.temComorbidade) {
            console.log ("APTA POR COMORBIDADE");
        } else {
            console.log ("INAPTA");
        }
    } else {
        console.log ("JA TOMOU VACINA");
    }
}