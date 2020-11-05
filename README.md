# Asteroids online

<p align="center">
  <img src="https://i.ibb.co/fngvx9Y/Lorem.png" style="border-radius: 15px; max-width: 600px; width: 100%">
</p><br>

Esta aplicação foi criada como forma de projeto final para o curso CS50 2019. A todos os interessados, acessem [**esse link**](https://cs50.harvard.edu/) para mais informações sobre o curso.

Essa aplicação online tem como objetivo ser uma "simulação" do clássico jogo Asteroids (1979), mas de forma online e que suporte múltiplos jogadores. Em game, diferentemente do jogo clássico, os jogadores podem atacar uns aos outros (bem no estilo de jogos ".io").

O objetivo do jogo é destruir asteroids; quanto mais asteroids destruídos, mais pontos são acumulados. Entretanto, também existe outra forma de se conseguir pontos... destruindo seus oponentes! Mas claro que não se pode atirar aleatoriamente; nesse modo há o sistema de escudos e níveis Para subir de nível, é necessário conseguir pontos, e a cada nível acima seus tiros possuem mais poder e seus escudos são mais resistentes. Vale lembrar que a única forma de restaurar seus escudos é subindo de nível.

A jogabilidade é simples, esta é a lista de controles válidos:

- W: avança a nave para frente
- A: rotaciona para a esquerda
- D: rotaciona para a direita
- space: atira para a frente

## **Recursos**

- Criação e listagem de salas públicas ou privadas
- Ingresso em salas preexistentes
- Jogo asteróides em tempo real e multiplayer
- Sistema de níveis em jogo

## **Principais tecnologias**

- Node v12.17.0
- TypeScript v4.0.3
- React.Js v16.13.1
- Express.js v4.17.1
- Socket.io v2.3.0

## **Setup local**

Para executar o jogo localmente, basta primeiramente realizar o clone deste repositório:

```bash
$ git clone https://github.com/PauloE314/Asteroids-online .
```

É necessário ter instalado na sua máquina o Node.js (versão superior à 10, se possível) e algum gerenciador de pacotes JavaScript (npm ou yarn).

Depois do clone, é necessário instalar as dependências do backend (server side) e frontend (client side). Esse setup na execução das seguintes linhas de código:

```bash
$ cd backend
$ yarn # Ou npm install
$ yarn dev

$ cd ../web
$ yarn # Ou npm install
$ yarn start
```

Ao termino de todas as instalações necessárias o projeto será executado localmente (na porta 3333 provavelmente).
