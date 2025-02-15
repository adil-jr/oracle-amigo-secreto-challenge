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

function atualizarLista() {
    let ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    
    listaAmigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.padding = "5px";
        li.style.gap = "10px";
        
        let spanNome = document.createElement("span");
        spanNome.textContent = amigo;
        
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(spanNome);
        li.appendChild(botaoRemover);
        ul.appendChild(li);
    });
}

function removerAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
