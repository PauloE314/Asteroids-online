import styled, { keyframes } from "styled-components";
import { BaseContainer, BaseContent } from "../../../styles/common";
import { colors, dimensions } from "../../../styles/global";

// Animations
const startButtonAnimation = keyframes`
  30% {
    opacity: 1;
  }
  31% {
    opacity: 0;
  }
  69% {
    opacity: 0;
  }
  70% {
    opacity: 1;
  }
`;

const alienAnimation = keyframes`
  0% {
    left: -120px;
  }

  20% {
    left: 120%;
  }

  60% {
    top: 5rem;
    left: 120%;
  }

  80% {
    top: 5rem;
    left: -120px;
  }
`;

// Components
export const Container = styled(BaseContainer)`
  overflow: hidden;
`;

export const Content = styled(BaseContent)`
  display: flex;
  flex-direction: column;
  z-index: 9999;

  & h1 {
    text-align: center;

    font-size: 7rem;
    margin-bottom: 2rem;
    color: ${colors.colorLightLight};
    font-family: "Press Start 2P";

    transition: all 1s;
  }

  & a {
    bottom: 1rem;
    left: calc(50% - 5rem / 2);

    position: absolute;
    background-color: transparent;
    cursor: pointer;
  }

  @media (max-width: ${dimensions.small}) {
    & h1 {
      font-size: 4rem;
    }
  }
`;

export const AlienShip = styled.img`
  position: absolute;
  width: 8rem;
  bottom: 5rem;
  left: -10rem;
  animation: ${alienAnimation} linear infinite 15s;
`;

export const StartButton = styled.button`
  font-size: 2rem;
  color: ${colors.colorLight};
  font-family: "Press Start 2P";
  text-align: center;

  background-color: transparent;
  animation: ${startButtonAnimation} 2s linear infinite;

  &:hover {
    color: ${colors.colorLightLight};
    animation: none;
  }
  &:active {
    color: ${colors.colorLightDark};
  }

  @media (max-width: ${dimensions.small}) {
    font-size: 1.5rem;
  }
`;
