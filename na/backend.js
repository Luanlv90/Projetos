import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

app.post("/api/escrever", async (req, res) => {
  const { texto } = req.body;

  const resposta = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: `Ajude a melhorar esse texto: ${texto}` }]
    })
  });

  const data = await resposta.json();
  res.json({ sugestao: data.choices[0].message.content });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
