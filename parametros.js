// Parâmetros da função

// function soma (numero1, numero2) {
//     return numero1 + numero2;
// }

// console.log (soma(2, 2))
// console.log (soma (245, 20))
// console.log (soma(-500, 60))

// Parâmetros x Argumentos

// Ordem dos parâmetros

// function nomeIdade(nome, idade){
//     return `Meu nome é ${nome} e minha idade é ${idade}`;
// }

// console.log (nomeIdade("Luria", 28))

// function soma (numero1, numero2) {
//     return numero1 + numero2;
// }-

// function multiplica(numero1 =1, numero2 = 1) {
//     return numero1 * numero2;
// }

// console.log(multiplica(soma(4,5)))

function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”