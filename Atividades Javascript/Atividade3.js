let nome = prompt()

console.log(getPrimeiroNome(nome))


function getPrimeiroNome(nome){
    let primeiroNome = ''
    for (let i = 0; i < nome.length;i++) {
        if (nome[i] == ' '){
            return primeiroNome
        }
        else{
            primeiroNome += nome[i]
        }
    }
}