const form = document.getElementById('form-agenda')
const nomeContato = [];
const numeroContato = [];
let linhas= '';


// adicionando um evento, tirando o submit e chamando as functions separadas para organizar o codigo
form.addEventListener('submit',function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroContato = document.getElementById('numero-contato')
    if (nomeContato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNumeroContato.value} já foi inserido`);
    } else {
        //adicionado aos arrays os inputs realizados
        nomeContato.push(inputNomeContato.value)
        numeroContato.push(parseFloat(inputNumeroContato.value))
        //recebendo o codigo html como uma string
        let linha = '<tr>'
        // += e igual a concatenar
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        // Operador ternário utilizando if como ? e else como :
        linha += `<tr>`;
        linhas += linha;
        //declarando os campos vazios apos adicionar a linha
        inputNomeContato.value = ''
        inputNumeroContato.value = ''
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
