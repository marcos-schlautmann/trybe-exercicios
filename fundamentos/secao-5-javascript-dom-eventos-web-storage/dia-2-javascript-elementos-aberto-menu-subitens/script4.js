// 1 - Recupar o elemento do id pai

const paiDoPai = document.querySelector('#pai');

// 2 - utilize childNodes para retornar uma coleção viva de nós filhos do elemento pai
const todosOsFilhos = pai.childNodes;

// 3 - utilize uma estrutura de repeticão para iterar sob o array todosOsFilhos;
// 4 - armazene o filho atual em uma variavel
// 5 - se o id do filho atual for diferente de elementoOndeVoceEsta, remova o filhoAtual

for (let index = todosOsFilhos.length - 1; index >= 0; index += 1) {
    const filhoAtual = todosOsFilhos[index];

    if(filhoAtual.id !== 'elementoOndeVoceEsta') {
        filhoAtual.remove();
    }
}
 
// 6 - recupere o elemento com o id segundoEUltimoFilhoDoFilho e o remova.

const segundoEUltimoFilhoDoFilho = document.querySelector('#segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();