// exemplos do uso de cookies

// criando um cookie (devemos passar uma string com chave e valor que queremos armazenar)
document.cookie = 'email=isabella@email.com';

// o cookie é deletado ao fechar o navegador, para evitar isso utilizamos uma data de expiração
document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

// o parâmetro path irá mostrar ao navegador o caminho ao qual o cookie pertence (por padrão será a página atual)
document.cookie = 'email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/';

// como salvar o cookie em uma variável para ler as informações armazanadas
const myCookie = document.cookie;
console.log(myCookie) // email=isabella@email.com

// podemos alterar o valor do cookie da mesma forma que foi criado. basta atribuir document.cookie a nova informação que você que armazaenar
document.cookie = 'email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC';

// para deletar o cookie nao precisa especificar o valor que pretende deletar. Basta passar uma data que já inspirou
document.cookie = 'email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;'













