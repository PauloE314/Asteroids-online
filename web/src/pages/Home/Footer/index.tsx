import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import { Container, Content, Contact, Additional } from "./style";

export function Footer() {
  return (
    <Container>
      <Content>
        <h2>Asteroids online</h2>

        <Contact>
          <h3>Contato</h3>
          <ul>
            <li>
              <a href="https://github.com/PauloE314/" target="_blank">
                <AiFillGithub className="icon" size="2.3rem" />
                PauloE314
              </a>
            </li>
            <li>
              <a href="mailto:pauloeduardodelima155@gmail.com" target="_blank">
                <MdEmail className="icon" size="2.3rem" />
                pauloeduardodelima155@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/paulo-eduardo-de-lima-louren%C3%A7o-178580197/"
                target="_blank"
              >
                <AiFillLinkedin className="icon" size="2.3rem" />
                Paulo Eduardo
              </a>
            </li>
          </ul>
        </Contact>

        <Additional>
          <h3>Adicional</h3>
          <ul>
            <li>
              <a href="https://github.com/PauloE314/Asteroids-online/" target="_blank">
                <AiFillGithub className="icon" size="2.3rem" />
                Repositório do projeto
              </a>
            </li>
          </ul>
        </Additional>
      </Content>
    </Container>
  );
}
