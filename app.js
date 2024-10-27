const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Função para calcular o saldo e o nível
function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Rota para calcular o rank
app.post('/calcular-rank', (req, res) => {
    const { vitorias, derrotas } = req.body;

    // Validação dos parâmetros
    if (typeof vitorias !== 'number' || typeof derrotas !== 'number' || vitorias < 0 || derrotas < 0) {
        return res.status(400).json({ error: "Por favor, insira valores válidos para vitórias e derrotas." });
    }

    const resultado = calcularRank(vitorias, derrotas);
    res.json({
        message: `O Herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}.`
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
