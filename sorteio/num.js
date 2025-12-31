function realizarSorteio() {
            const tipo = document.getElementById("tipoSorteio").value;
            const lista = document.getElementById("lista").value.trim();
            let resultado = "";

            if (tipo === "nome") {
                // Sorteio de nomes
                const nomes = lista.split("\n").map(n => n.trim()).filter(n => n !== "");
                if (nomes.length > 0) {
                    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
                    resultado = "Nome sorteado: " + sorteado;
                } else {
                    resultado = "Digite pelo menos um nome!";
                }
            } else {
                // Sorteio de números
                // Exemplo: intervalo "1-50"
                const partes = lista.split("-");
                if (partes.length === 2) {
                    const min = parseInt(partes[0]);
                    const max = parseInt(partes[1]);
                    if (!isNaN(min) && !isNaN(max) && min < max) {
                        const sorteado = Math.floor(Math.random() * (max - min + 1)) + min;
                        resultado = "Número sorteado: " + sorteado;
                    } else {
                        resultado = "Digite um intervalo válido (ex: 1-50)";
                    }
                } else {
                    resultado = "Digite o intervalo no formato: min-max (ex: 1-50)";
                }
            }

            document.getElementById("resultado").innerText = resultado;
        }
