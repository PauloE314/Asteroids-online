import styled, { keyframes } from "styled-components";

import { BaseContainer, BaseContent, GameTitle as _GameTitle } from "../../styles/common";
import { colors } from "../../styles/global";

// Animations
const moveAnimation = keyframes`
  0% {
    left: -8rem;
  }
  60% {
    left: calc(100% + 8rem);
  }
  100% {
    left: calc(100% + 8rem);
  }
`;

// Components

export const Container = styled(BaseContainer)`
  overflow: hidden;
`;

export const GameTitle = styled(_GameTitle)``;

export const Content = styled(BaseContent)`
  & form {
    display: flex;
    flex-direction: column;
    background-color: ${colors.colorDark};

    padding: 4rem;

    button {
      font-family: "Press Start 2P";
      font-size: 2rem;
      padding: 1rem;
      margin-top: 2rem;
      background-color: ${colors.colorLightLight};
    }
  }
`;

export const SelectGameMode = styled.div`
  /* Game Mode */
  position: relative;
  padding: 0 !important;

  & #down-arrow {
    height: 1rem;
    width: 2rem;
    position: absolute;
    right: 1rem;
    top: calc(50% - 1rem / 2);
  }

  & select {
    color: var(--color-light);
    background-color: transparent;
    cursor: pointer;
    appearance: none;
    width: 100%;
    padding: 1rem;
    font-size: 3rem;
    font-family: "VT323";
    color: var(--color-light-light);

    option {
      font-size: 1.7rem;
      width: 100%;
      font-family: "VT323";
      color: var(--color-dark);
    }
  }
`;

export const PlayerShip = styled.img`
  width: 2rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
  transform: rotate(90deg);
  animation: ${moveAnimation} 10s linear infinite;

  &:last-child {
    left: calc(100% - 5rem);
    top: calc(100% - 5rem);
    transform: rotate(-90deg);
    animation-delay: -5s;
    animation-direction: reverse;
  }
`;
