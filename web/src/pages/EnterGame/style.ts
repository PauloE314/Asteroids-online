import styled, { keyframes } from "styled-components";
import { BaseContainer, BaseContent, GameTitle } from "../../styles/common";
import { colors, dimensions } from "../../styles/global";

// Animations
const alienShipAnimation = keyframes`

  /* left to right */
  0% {
    left: -8rem;
    top: 4rem;
  }
  25% {
    left: calc(100vw + 8rem);
    top: 4rem;
  }

  /* Right to left */
  50% {
    left: calc(100vw + 8rem);
    top: calc(100vh - 8rem);
  }
  75% {
    left: -8rem;
    top: calc(100vh - 8rem);
  }
`;

const playerShipAnimation = keyframes`
  /* Bottom right */
  0% {
    opacity: 1;
    top: calc(100vh - 6rem);
    left: calc(100vw + 3rem);
    transform: rotate(-90deg);
  }

  25% {
    opacity: 1;
    top: calc(100vh - 6rem);
    left: calc(100vw - 8rem);
    transform: rotate(-90deg);
  }
  30% {
    opacity: 1;
    top: calc(100vh - 6rem);
    left: calc(100vw + 3rem);
    transform: rotate(-90deg);
  }
  30.5% {
    opacity: 0;
    top: calc(100vh - 6rem);
    left: calc(100vw + 3rem);
    transform: rotate(-90deg);
  }
  49.5% {
    opacity: 0;
  }
  /* Top left */
  50% {
    opacity: 1;
    top: 6rem;
    left: -8rem;
    transform: rotate(90deg);
  }
  75% {
    opacity: 1;
    top: 6rem;
    left: 8rem;
    transform: rotate(90deg);
  }

  80% {
    opacity: 1;
    top: 6rem;
    left: -8rem;
    transform: rotate(90deg);
  }
  80.5% {
    opacity: 0;
    top: 6rem;
    left: -8rem;
    transform: rotate(90deg);
  }
  99.5% {
    opacity: 0;
  }
`;

export const Container = styled(BaseContainer)`
  overflow: hidden;
`;

export const Content = styled(BaseContent)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  border: 1px solid ${colors.colorLightLight};
  margin-top: 3rem;
  max-width: 70rem;
  width: 45%;
  min-width: 45rem;

  & form {
    display: flex;

    input {
      width: 100%;
      margin: 0;
    }

    button {
      width: auto;
      color: var(--color-dark);
      background-color: var(--color-light-light);
      font-family: "VT323";
      font-size: 3rem;
      padding: 1rem 3rem;
      width: auto;
    }
  }
`;

export const SearchList = styled.ul`
  border: 1px solid ${colors.colorLightLight};
  border-width: 1px 0 0 0;

  margin: 0;
  height: 25rem;
  overflow: auto;

  & button {
    margin: 0;
    display: flex;
    width: 100%;
    background-color: transparent;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    cursor: pointer;

    * {
      color: ${colors.colorLightLight};
      font-family: "VT323";
      font-size: 2.5rem;
    }

    & .lock {
      margin-right: 1.2rem;
      position: relative;
      top: 0.3rem;
    }
    &:hover {
      background-color: ${colors.colorLightDark};
    }
    &:active {
      background-color: transparent;
    }
  }

  /* Scroll Style */
  &::-webkit-scrollbar {
    width: 1rem;
    background-color: ${colors.colorDark};
    border-left: 1px solid ${colors.colorLightLight};
  }
  &::-webkit-scrollbar-thumb {
    background: ${colors.colorLightLight};
  }
  &::-webkit-scrollbar-thumb:active {
    background: ${colors.colorLightDark};
  }

  @media (min-width: ${dimensions.maxWidth}) {
    height: 35rem;
  }
`;

export const PlayerShip = styled.img`
  width: 3.5rem;
  position: absolute;
  top: calc(100vh - 6rem);
  left: calc(100vw + 3rem);

  transform: rotate(-90deg);
  animation-name: ${playerShipAnimation};
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @media (max-width: ${dimensions.small}) {
    animation-duration: 8s;
    animation-delay: 0.5s;
  }
`;

export const AlienShip = styled.img`
  width: 7rem;
  position: absolute;
  top: 3rem;
  left: 8rem;

  left: -8rem;
  animation-name: ${alienShipAnimation};
  animation-delay: 2s;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @media (max-width: ${dimensions.small}) {
    animation-duration: 8s;
  }
`;

export const Title = styled(GameTitle)``;
