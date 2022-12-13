//Captura a div que será responsário por apresentar os comentários inseridos via formulario.
let queryResult = document.querySelector('#interactive-area');

function insertComments() {
    // Captura os dados do formulario e aloca nas variaveis
    let userName = document.querySelector('input[name="name"]').value;
    let commets = document.querySelector('textarea[name="comments"]').value;

    //Verifica se já foi inserido algum comentario, caso contrario insere um titúlo para a sessão de comentarios.
    if (queryResult.children.length == 0) 
        queryResult.innerHTML += `<h3>Comentários</h3>`;
    
    //Insere os comentarios no documento HTML    
    queryResult.innerHTML += `<p class="user">${userName}</p>`;
    queryResult.innerHTML += `<p>${commets}</p>`;

    //Limpa os campos de nome e comentarios do formulário.
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('textarea[name="comments"]').value = '';
}
