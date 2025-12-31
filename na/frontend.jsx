import { useState } from "react";

export default function App() {
  const [texto, setTexto] = useState("");
  const [resposta, setResposta] = useState("");

  const enviar = async () => {
    const res = await fetch("/api/escrever", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto })
    });
    const data = await res.json();
    setResposta(data.sugestao);
  };

  return (
    <div className="p-4">
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="border w-full p-2"
      />
      <button onClick={enviar} className="bg-blue-500 text-white p-2 mt-2">
        Enviar
      </button>
      <p className="mt-4">{resposta}</p>
    </div>
  );
}
