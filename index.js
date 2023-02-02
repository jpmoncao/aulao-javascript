// EXERCÍCIO: Menu de tabuada que aparece até que a resposta do menu for <= 0. Se não, ele mostra a tabuada selecionada.

let enterToMenu = confirm("Bem vindo ao menu de tabuada! Deseja continuar?")
if (enterToMenu) {
    while (true) {
        let numberChosen = prompt("[0 para sair]\nDigite um número:")
        if (numberChosen > 0) {
            console.warn(`TABUADA DO ${numberChosen}`)
            for (let c = 1; c <= 10; c++) {
                console.log(`${numberChosen} x ${c} = ${numberChosen * c}`)
            }
        } else {
            if (numberChosen == 0) {
                alert('Saindo...')
                break
            } else {
                alert('Número inválido. Saindo...')
                break
            }
        }
    }
} else {
    alert("Ok, não vou executar!")
}