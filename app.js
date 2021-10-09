var result = document.getElementById('result')
var output = document.getElementById('output')
var numeroAtual = 0
var numeroSecundario = 0
var res = 0

function putNumero(numero){

    // quando pressionar uma tecla: reseta display se for 0 display.... reseta para NADA e não ZERO
    if ( output.value == 0 )  output.value = ''

    output.value += numero.textContent // e vai colocando no display o numero escolhido
    const numeroDigitado  = []
    numeroDigitado.push(output.value)
    
    const ultimo = numeroDigitado[numeroDigitado.length - 1]

    // numero atual é ultimo elemento do array que vai colocando todos os numeros do display, logo: o atual
    if( output.value.indexOf('+') == -1 ){
        numeroAtual = ultimo
    }
    else{
        numeroSecundario = ultimo.substring(ultimo.indexOf("+") + 1); // ultimo depois do sinal
    }

}

function eachDel(){

    result.value = 0

    if (output.value != 0){ // se tiver algum elemento

        if ( output.value.indexOf('+') == -1 ){

            numeroAtual = numeroAtual.split('') // numero em array
            numeroAtual.pop() // tira ultimo elemento
            numeroAtual = numeroAtual.toString().replace(/,/g, '') // troca virgulas por nada
            output.value = numeroAtual // imprime no display
        }
    

        if ( output.value.indexOf('+') != -1 ){

            numeroSecundario = numeroSecundario.split('') // numero em array
            numeroSecundario.pop() // tira ultimo elemento
            numeroSecundario = numeroSecundario.toString().replace(/,/g, '') // troca virgulas por nada

            console.log(numeroSecundario)
            output.value = numeroSecundario // imprime no display
        }
    }

    if ( numeroAtual == 0 ) output.value = 0
}

function deleteAll(output) {
    output.value = 0 // reseta display
    numeroAtual = 0 // reseta numero atual
    numeroSecundario = 0 // reseta numero atual
}

function displayNumeroAtualESecundario(numeroAtual, numeroSecundario){
    console.log('atual: ', numeroAtual)
    console.log('secundario: ', numeroSecundario)
}

function somar(output){
    output.value += '+'
}

function resultado(numeroAtual, numeroSecundario, output){
    res =  parseInt(numeroAtual) + parseInt(numeroSecundario)
    console.log('resultado: ', res)
    result.value = res
}


document.querySelectorAll('.numeros').forEach( numero => { 

    numero.addEventListener('click', () => putNumero(numero, output) )
    
    addEventListener('keydown', event => {
        if (numero.textContent == event.key) numero.click()
    })
    
})

var deleteEach = document.getElementById('deleteEach')
deleteEach.addEventListener('click', () => eachDel(numeroAtual, output) ) 

var dAll = document.getElementById('deleteAll')
dAll.addEventListener('click', () => deleteAll(output) )

var soma = document.getElementById('soma')
soma.addEventListener('click', () => somar(output) )

var igual = document.getElementById('igual')
igual.addEventListener('click', () => resultado(numeroAtual, numeroSecundario, output) )


addEventListener('keydown', (event) => {
    // console.log(event.key)
    switch(event.key){
        case 'Backspace':
            deleteEach.click()     
            break
        case 'Delete':
            dAll.click()     
            break
        case '+':
            soma.click() 
            break
        case 'x':
            displayNumeroAtualESecundario(numeroAtual, numeroSecundario)
        
        case '=': case 'Enter':
            igual.click()
        }
})

