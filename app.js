document.querySelectorAll('.numeros').forEach(numero =>{ 

    const numeroDigitado  = []
    var numeroAtual = ''

    var output = document.getElementById('output')

    numero.addEventListener('click', function(){
        
        if(output.value == 0){
            output.value = ''
        }

        output.value += numero.textContent

        numeroDigitado.push(output.value)
        numeroAtual = numeroDigitado[numeroDigitado.length - 1]
        
        console.log(numeroAtual)


        var deleteAll= document.getElementById('deleteAll')
        deleteAll.onclick = () => output.value = 0
    
        var deleteEach = document.getElementById('deleteEach')
        deleteEach.onclick = () => {
            numeroAtual =  numeroAtual.split('')
            numeroAtual.pop()

            setTimeout( () => {
                numeroAtual = numeroAtual.toString().replace(/,/g, '')
                output.value = numeroAtual
                console.log(numeroAtual)        
            }, 10)

        }


    })

})

addEventListener('keydown', (event) => {
    
})