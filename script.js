// Função exigida pela tarefa para filtrar os livros na tela
function buscarLivro() {
    let input = document.getElementById('inputBusca').value.toLowerCase();
    let livros = document.getElementsByClassName('livro');

    for (let i = 0; i < livros.length; i++) {
        let titulo = livros[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        
        if (titulo.includes(input)) {
            livros[i].style.display = "";
        } else {
            livros[i].style.display = "none";
        }
    }
}