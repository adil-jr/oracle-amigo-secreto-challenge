let listaAmigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }
    
    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}
