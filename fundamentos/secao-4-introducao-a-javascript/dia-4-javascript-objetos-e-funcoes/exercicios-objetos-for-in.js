let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(info);
console.log('Bem-vinda ' + info.personagem + ' !');

// Adiciona a chave recorrente
info['recorrente'] = 'Sim';
console.log(info);

// //  Mostra as chaves do objeto
// for (const infos in info) {
//     console.log(infos);
// }

// // Mostra os valores do objeto
// for (const infos in info) {
//     console.log(info[infos]);
// }

// Criando o segundo objeto e imprimindo com o primeiro
let infoPatinha = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let index in info) {
    console.log(index);
}

