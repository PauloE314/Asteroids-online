import React from "react";
import { isBrowser } from "react-device-detect";
import styled from "styled-components";
import { RotateAnimation } from "../../../styles/animations";
import { BaseContainer, BaseContent, GameTitle } from "../../../styles/common";

interface IOnlyBrowserProps {
  children: React.ReactChild;
}

export function OnlyBrowser({ children }: IOnlyBrowserProps) {
  return (
    <>
      {isBrowser && children}
      {!isBrowser && (
        <Container>
          <Content>
            <GameTitle>Sorry</GameTitle>
            <Description>Sorry, but the game is only available for computers</Description>
            <AnimatedShip src={require("../../../assets/sprites/Ship.svg")} />
          </Content>
        </Container>
      )}
    </>
  );
}

// Components
const Container = styled(BaseContainer)``;
const Content = styled(BaseContent)``;
const Description = styled.p`
  margin-top: 3rem;
  font-size: 3rem;
  text-align: center;
  font-family: "VT323";
`;

const AnimatedShip = styled.img`
  position: absolute;
  left: calc((100% - 3rem) / 2);
  bottom: calc(25%);
  width: 3rem;

  animation: ${RotateAnimation} 2s linear infinite;
`;
