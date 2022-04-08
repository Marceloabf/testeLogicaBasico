var nomeCompleto = 'Marcelo Amorim'

console.log(nomeCompleto)

const number1 = 16

const number2 = 20

const result = number1 * number2

function saudacao() {
  console.log('oi, eu sou o goku!')
}

saudacao()

function product(x, y) {
  console.log(x * y)
}

product(7, 10)

function podeDirigir(number) {
  if (number >= 18) {
    console.log('Você pode dirigir!')
  } else {
    console.log('Você não pode dirigir')
  }
}

podeDirigir(15)

for (i = 0; i < 21; i++) {
  console.log(i)
}

for (let i = 0; i <= 21; i++) {
  if (i % 2 != 0) {
    console.log(i)
  }
}

function tabuada(numero) {
  for (i = 0; i < 11; i++) {
    console.log(' a tabuada é: ' + numero * i)
  }
}

tabuada(3)

function converterEmHoras(numero) {
  horas = Math.floor(numero / 60)
  minutos = numero % 60

  console.log(`são ${horas} horas e ${minutos} minutos!`)
}

converterEmHoras(997)
