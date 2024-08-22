//Act 1
let kilos = []

let verdurasyFrutas = []

for (let index = 0; index < 5; index++) {
    verdurasyFrutas.push(prompt('Ingrese una fruta o verdura'))
}

for (let index = 0; index < 5; index++) {
    kilos.push(Number(prompt('Ingrese los kilos')))
}


//Act c
if (verdurasyFrutas.length == 5 ){

for (let index = 0; index < verdurasyFrutas.length; index++) {
    
    if (verdurasyFrutas[index] == 'Tomate'){
        console.log (kilos[index] + 'Kg')
    }
} 
} else {
    console.log ('No hay stock disponible')
}   

//Act d

kilos [0] = kilos [0] + 20
kilos [1] = kilos [1] + 20


//Act e
for (let index = 0; index < verdurasyFrutas.length; index++) {
     console.log (verdurasyFrutas[index] + ' ' + kilos [index] + 'Kg')
}


//Act f
for (let index = 0; index < kilos.length; index++) {
     if (kilos [index] >= 20) {
         console.log (verdurasyFrutas[index] + ' ' + kilos [index] + 'Kg')

     }
}
