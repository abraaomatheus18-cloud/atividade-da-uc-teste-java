// =========================
// ARRAYS
// =========================

// 1.
let nomes = ["Abraão", "Arthur", "Luiz", "Pedro", "Maria"];

console.log(nomes[0]);


// 2.
let cores = ["Azul", "Verde", "Vermelho", "Preto"];

console.log(cores[cores.length - 1]);


// 3.
cores.push("Amarelo");

console.log(cores.length);


// 4.
let numeros = [10, 20, 30, 40, 50];

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}


// =========================
// OBJETOS
// =========================

// 5.
let pessoa = {
    nome: "Abraão",
    idade: 16,
    cidade: "Recife"
};

console.log(pessoa.nome);


// 6.
pessoa.idade = 17;

console.log(pessoa);


// 7.
pessoa.profissao = "Estudante";

console.log(pessoa);


// 8.
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    cor: "Prata"
};

console.log(carro);


// =========================
// ARRAY + OBJETOS
// =========================

// 9.
let alunos = [
    {
        nome: "João",
        nota: 8.5
    },
    {
        nome: "Maria",
        nota: 9.0
    },
    {
        nome: "Pedro",
        nota: 7.5
    }
];

console.log(alunos[0].nota);


// 10.
alunos.push({
    nome: "Abraão",
    nota: 10
});

console.log(alunos);


// 11.
for(let i = 0; i < alunos.length; i++) {
    console.log(alunos[i].nome);
}