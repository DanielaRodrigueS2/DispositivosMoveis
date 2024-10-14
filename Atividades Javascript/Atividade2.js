let array = []
let maior = 0

for (let i = 0; i < 5; i++) {
    array[i] = prompt()
    if(array[i].length >= array[maior].length){
        maior = i
    }
}

console.log(array[maior])