let atletas = [
  {
    nome: 'Cesar Abascal',
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: 'Fernando Puntel',
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: 'Daiane Jelinsky',
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: 'Bruno Castro',
    notas: [10, 10, 10, 9, 9.5],
  },
];

for (let i = 0; i < atletas.length; i++) {
  var vic = atletas[i];
}

var backup = `${vic.notas}`;

let numbers = vic.notas;

let numbersUAV = numbers.sort(function (a, b) {
  return a - b;
});

function numbersUA() {
  numbersUAV[1] = false;
  return numbersUAV;
}

function removeFalsey(numbersUA) {
  return numbersUA().filter(k => {
    if (k) {
      return k;
    }
  });
}

let polizei = removeFalsey(numbersUA);
console.log();
let nohao = polizei.slice(0, 3);

let soma = 0;

console.log();
function sma() {
  let soma = 0;
  nohao.forEach(function (noh) {
    soma = soma + noh;
  });
  return soma;
}
let finalNumber = sma();
let length = nohao.length;
function end() {
  return finalNumber / length;
}

console.log(
  'Atleta: ' +
    vic.nome +
    `
Notas Obtidas: ` +
    backup +
    `
M\édia Válida: ` +
    end()
);
