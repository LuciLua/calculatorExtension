function eachDel(){

    numeroAtual = numeroAtual.split('') // numero em array
    numeroAtual.pop() // tira ultimo elemento
    numeroAtual = numeroAtual.toString().replace(/,/g, '') // troca virgulas por nada

    output.value = numeroAtual // imprime no display

    if ( numeroAtual == 0 ) output.value = 0
}

function deleteAll(numeroAtual, output) {
    output.value = 0 // reseta display
    numeroAtual = 0 // reseta numeroAtual
}

function putNumero(numero){

    // quando pressionar uma tecla: reseta display se for 0 display
    if ( output.value == 0 )  output.value = ''

    output.value += numero.textContent // e vai colocando no display o numero escolhido
    
    const numeroDigitado  = []
    numeroDigitado.push(output.value)

    // numero atual é ultimo elemento do array que vai colocando todos os numeros do display, logo: o atual
    numeroAtual = numeroDigitado[numeroDigitado.length - 1]

    // console.log(numeroAtual)    
}


document.querySelectorAll('.numeros').forEach( numero => { 
    
    var numeroAtual = ''
    var output = document.getElementById('output')
    numero.addEventListener('click', () => putNumero(numero, output) )
    
    addEventListener('keydown', event => {
        if (numero.textContent == event.key)  numero.click()
    })
    
})

var dAll = document.getElementById('deleteAll')
dAll.addEventListener('click', () => deleteAll(numeroAtual, output) )

var deleteEach = document.getElementById('deleteEach')
deleteEach.addEventListener('click', () => eachDel(numeroAtual, output) ) 

addEventListener('keydown', (event) => {
    // console.log(event.key)
    switch(event.key){
        case 'Backspace':
            deleteEach.click()     
            break
        case 'Delete':
            dAll.click()     
            break
        }
})

