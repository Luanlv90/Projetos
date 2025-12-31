

function numeroSorteio() {
    let texto = document.getElementById("lista").value.trim();
    let itens = texto.split("\n").filter(item => item.trim() !== "");
    if (itens.length === 0) {
        return "A lista está vazia. Por favor, adicione alguns itens.";
    }

    let sorteado = itens[Math.floor(Math.random() * itens.length)];
    document.getElementById("resultado").innerText = "Item sorteado: " + sorteado;
};