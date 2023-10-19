const user = {
    name: "Marcelo",
    peso: "90",
    altura: "1.85",
    email: "pedro@outlook.com",
    password: "senhaforte"
}

const user01 = new Object()
console.log(user01)
user01.name = "Pedro"
user01.peso = "80"
user01.altura = "1.75"
user01.email = "pedro@teste.com.br"
user01.password = "senhaforte"

const user02 = new Object()
console.log(user01)
user01.name = "Padru"
user01.peso = "70"
user01.altura = "2.75"
user01.email = "aaabckds@teste.com.br"
user01.password = "senhaforte"

console.log(user)

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

Object.defineProperty(user01, 'cpf', {
    enumerable: true,
    writable: false,
    value: '123456789'
})

console.log(user01)

const empresa = "EBAC"
user01.empresa = empresa
user02.empresa = empresa
user.empresa = "Google"

console.log(user01)
console.log(user02)
console.log(user)

user01.filhos = {
    filho01: {
        nome: "Pedro",
        idade: "10"
    },
    filho02: {
        nome: "João",
        idade: "15"
    }
}

console.log(Object.entries(user01.filhos))