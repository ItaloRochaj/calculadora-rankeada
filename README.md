# 📊 Calculadora de Partidas Rankeadas

### Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Objetivo](#objetivo)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Endpoints](#endpoints)
- [Exemplo de Uso](#exemplo-de-uso)
- [Lógica de Níveis](#lógica-de-níveis)
- [Estrutura do Projeto](#estrutura-do-projeto)

---

## Descrição do Projeto

A "Calculadora de Partidas Rankeadas" é uma API desenvolvida com Node.js e Express que calcula o saldo de vitórias de um jogador e determina seu nível com base nas vitórias e derrotas informadas. A API recebe o número de vitórias e derrotas através de uma requisição `POST` e retorna o saldo e o nível do jogador de acordo com as regras definidas.

---

## Objetivo

O objetivo do projeto é:
- Demonstrar o uso de variáveis, operadores, laços de repetição, estruturas de decisão e funções em um contexto prático.
- Criar uma API simples que pode ser integrada a um front-end ou outro sistema para calcular o saldo de vitórias e classificar jogadores em diferentes níveis de rank.

---

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no lado do servidor.
- **Express.js**: Framework minimalista para construção de APIs com Node.js.

---

## Instalação e Configuração

### Pré-requisitos

- **Node.js** e **npm** instalados.

### Passo a Passo

1. Clone o repositório do projeto:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-partidas.git
   cd calculadora-partidas
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute o servidor:
   ```bash
   node app.js
   ```

O servidor estará ativo em `http://localhost:3000`.

---

## Endpoints

### POST `/calcular-rank`

Recebe o número de vitórias e derrotas como parâmetros e retorna o saldo e o nível do jogador.

#### Parâmetros

- **Body** (JSON):
  - `vitorias` (número): Número de vitórias do jogador (obrigatório).
  - `derrotas` (número): Número de derrotas do jogador (obrigatório).

#### Resposta

- **Sucesso (200)**:
  - Retorna uma mensagem com o saldo e o nível do jogador.

  ```json
  {
      "message": "O Herói tem de saldo de {saldoVitorias} e está no nível de {nivel}."
  }
  ```

- **Erro (400)**:
  - Caso as entradas sejam inválidas, retorna um erro de validação.

  ```json
  {
      "error": "Por favor, insira valores válidos para vitórias e derrotas."
  }
  ```

---

## Exemplo de Uso

1. Envie uma requisição `POST` para `http://localhost:3000/calcular-rank`.
2. Corpo da requisição (`Body`):
   ```json
   {
       "vitorias": 15,
       "derrotas": 5
   }
   ```
3. Resposta esperada:
   ```json
   {
       "message": "O Herói tem de saldo de 10 e está no nível de Bronze."
   }
   ```

---

## Lógica de Níveis

A lógica para calcular o nível do jogador é baseada no número de vitórias:

- **Ferro**: Menos de 10 vitórias
- **Bronze**: 11 a 20 vitórias
- **Prata**: 21 a 50 vitórias
- **Ouro**: 51 a 80 vitórias
- **Diamante**: 81 a 90 vitórias
- **Lendário**: 91 a 100 vitórias
- **Imortal**: Mais de 100 vitórias

O saldo é calculado como: `saldoVitorias = vitorias - derrotas`.

---

## Estrutura do Projeto

```plaintext
calculadora-partidas/
├── app.js             # Arquivo principal do servidor e lógica da calculadora
├── index.html       # Configurações e dependências do projeto Node.js
└── README.md          # Documentação do projeto
```

---

## Observações

Este projeto é ideal para quem está começando com JavaScript no back-end e deseja entender o funcionamento básico de uma API RESTful. A API pode ser expandida com novas funcionalidades, como um front-end em HTML/CSS, banco de dados para armazenar partidas, e autenticação de usuário.

---

