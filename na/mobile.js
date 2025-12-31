const resposta = await fetch("http://seu-servidor.com/api/escrever", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ texto: "Meu parágrafo inicial..." })
});
const data = await resposta.json();
console.log(data.sugestao);
