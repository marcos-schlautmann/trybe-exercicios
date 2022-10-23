/* Programa retorna maior numero  */

// let num1 = 60;
// let num2 = 60;
// let num3 = 90;

// if (num1 > num2) {
//     console.log(num1);
// }
// else {
//     console.log(num2);
// }

/* Programa retorna maior de 3 numeros */

// if (num1 > num2 && num1 > num3) {
//     console.log(num1);
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log(num2);
// }
// else {
//     console.log(num3);
// }

/* Programa retorna positive e negative */

// if (num1 > 0) {
//     console.log('O número digitado é positive !');
// } 
// else if(num1 < 0) {
//     console.log('O número digitado é negative !');
// }
// else {
//     console.log('O número digitado é igual a zero !');
// }

/* Programa retorna angulos do triângulo */

// if (num1 + num2 + num3 == 180) {
//     console.log('A soma dos 3 ângulos é : ' + true);
// }
// else if (num1 + num2 + num3 > 180) {
//     console.log('A soma dos 3 ângulos é :' + false);
// }
// else if (num1 || num2 || num3 < 0) {
//     console.log('O ângulo digitado é inválido !');
// }

/* Programa retorna as peças de xadrez independente da string estar com letra maiscula ou minuscula - toLowerCase() */

// let pecasDeXadrez = 'REI';

// switch (pecasDeXadrez.toLowerCase()) {
//     case 'rei': console.log('Rei => 1 casa para qualquer direção !');
//         break;
//     case 'rainha': console.log('Rainha => horizontal, vertical, diagonal !');
//         break;
//     case 'bispo':
//         console.log('Bispo => diagonal !');
//         break;
//     case 'cavalo': console.log('Cavalo => movimento em L !');
//         break;
//     case 'torre': console.log('Torre => horizontal e vertical !');
//         break;
//     case 'pião': console.log('Pião => apenas 1 casa pra frente, sendo seu primeiro movimento poderá andar 2 casas !');
//         break;
//     default: console.log('Erro ! Peça inválida !');
// }


/* Programa que converte porcetagem de 0 a 100% em notas de A a F */

// let notaConceito = 25;

// if(notaConceito < 0 || notaConceito > 100) {
//     console.log("Erro, nota incorreta! Digite novamente !");
// } else if (notaConceito >= 90) {
//     console.log("Sua nota conceito equivalente é : A!");
// } else if (notaConceito >= 80) {
//     console.log("Sua nota conceito equivalente é : B!");
// } else if (notaConceito >= 70) {
//     console.log("Sua nota conceito equivalente é : C!");
// } else if (notaConceito >= 60) {
//     console.log("Sua nota conceito equivalente é : D!");
// } else if (notaConceito >= 50) {
//     console.log("Sua nota conceito equivalente é : E!");
// } else {
//     console.log("Sua nota conceito equivalente é : F!");
// }


/* Programa retorna true caso uma das 3 opções seja par  */

// const a = 7;
// const b = 3;
// const c = 5;

// if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

/* Programa que calcula o lucro de um produto */

// const custoDoProduto = 10;
// const valorDeVenda = 20;

// if (custoDoProduto < 0 || valorDeVenda < 0) {
//     console.log('Valor incorreto, digite novamente !');
// }
// else {
//     const valorCustoTotal = custoDoProduto * 1.2;
//     const lucro = (valorDeVenda - valorCustoTotal) * 1000;
//     console.log(lucro);
// }


/* Programa calcula salario líquido a receber */

let salarioBruto = 3000.00;
let salarioBase = 0;
let salarioLiquido = 0;
let imposto = 0;

// Alíquotas do INSS

if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto * 0.92;
}
else if (salarioBruto <= 2594.92) {
    salarioBase = salarioBruto * 0.91;
}
else if (salarioBruto <= 5189.82) {
    salarioBase = salarioBruto * 0.89;
}
else {
    salarioBase = salarioBruto - 570.88;
}

// Alíquotas do Imposto 

if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBase;
}
else if (salarioBase <= 2826.65) {
    imposto = (salarioBase * 0.075) - 142.80;
    salarioLiquido = salarioBase - imposto;
}
else if (salarioBase <= 3751.05) {
    imposto = (salarioBase * 0.15) - 354.80;
    salarioLiquido = salarioBase - imposto;
}
else if (salarioBase <= 4664.68) {
    imposto = (salarioBase * 0.225) - 636.13;
    salarioLiquido = salarioBase - imposto;
}
else {
    imposto = (salarioBase * 0.275) - 869.36
    salarioLiquido = salarioBase - imposto;
}

console.log('O seu salário líquido com os descontos do INSS e IR é = ' + 'R$ ' + salarioLiquido + ' reais');

