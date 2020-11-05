import React from "react";

import { Container, About, Content, Tutorial } from "./style";

import meteorite from "../../../assets/meteorite.svg";
import alien from "../../../assets/alien.svg";

export function AboutTheProject() {
  return (
    <Container id="about-the-project">
      <Content>
        <About>
          <h2>Sobre o projeto</h2>
          <div>
            {/* Initial */}
            <p>
              Esta aplicação foi criada como parte de um projeto final para o curso CS50 2019. A
              todos os interessados, acessem
              <a href="https://cs50.harvard.edu/" target="blank">
                <b> esse link </b>
              </a>
              para mais informações sobre o curso.
            </p>
            {/* Project description */}
            <p>
              Esta solução WEB é uma simulação do clássico jogo Asteroids (1979), mas que
              possibilita o jogo multiplayer, em tempo real. Tem como objetivo facilitar e
              modernizar a experiência dos jogadores casuais com esse jogo que marcou gerações, mas
              que infelizmente é complicado de se encontrar em um simulador seguro na internet.
            </p>
            <p>
              Com um visual retro e o melhor da tecnologia atual, essa é uma forma muito divertida
              para se passar algumas horas. Espero que gostem do resultado!
            </p>
          </div>
          <img id="meteorite" src={meteorite} alt="" />
        </About>

        <Tutorial>
          <h2>Como jogar</h2>
          <div>
            <p>
              O objetivo do jogo é destruir asteroids; quanto mais asteroids destruídos, mais pontos
              são acumulados. Entretanto, também existe outra forma de se conseguir pontos...
              destruindo seus oponentes! Mas claro que não se pode atirar aleatoriamente; nesse modo
              há o sistema de <b>escudos</b> e <b>níveis</b>.
              <p>
                {" "}
                Para subir de nível, é necessário conseguir pontos, e a cada nível acima seus tiros
                possuem mais poder e seus escudos são mais resistentes. Vale lembrar que a única
                forma de restaurar seus escudos é subindo de nível.
              </p>
            </p>
            <p>A jogabilidade é simples, esta é a lista de controles válidos:</p>
            <ul>
              <li>
                <b>W</b>: avança a nave para frente
              </li>
              <li>
                <b>A</b>: rotaciona para a esquerda
              </li>
              <li>
                <b>D</b>: rotaciona para a direita
              </li>
              <li>
                <b>space</b>: atira para a frente
              </li>
            </ul>
          </div>
          <img id="alien" src={alien} alt="" />
        </Tutorial>
      </Content>
    </Container>
  );
}
