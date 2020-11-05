import styled, { keyframes } from "styled-components";
import { BaseContainer, BaseContent } from "../../styles/common";
import { RotateAnimation, MoveAnimation } from "../../styles/animations";
import { colors, dimensions } from "../../styles/global";

// Animation
const moveAnimation = MoveAnimation({
  from: { x: null, y: "calc(100% + 10rem)" },
  to: { x: null, y: "-10rem" },
});
const rotateAnimation = RotateAnimation();

// Components
export const Container = styled(BaseContainer)`
  overflow: hidden;
`;

export const Content = styled(BaseContent)`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    margin-bottom: 8rem;
  }

  & button {
    background-color: ${colors.colorDark};
    color: ${colors.colorLightDark};
    font-family: "Press Start 2P";
    font-size: 2.3rem;
    padding: 0rem 3rem;
    &:hover {
      color: ${colors.colorLightLight};
    }
    &:active {
      color: ${colors.colorLightDark};
    }
  }

  /* Smaller points */
  @media (max-width: ${dimensions.medium}) {
    & div {
      display: flex;
      flex-direction: column;
    }
    & button:first-child {
      margin-bottom: 3rem;
    }
  }
`;

export const Asteroid = styled.img`
  width: 11rem;
  position: absolute;
  animation-name: ${moveAnimation}, ${rotateAnimation};
  animation-duration: 10s, 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 0s, 0s;

  &:nth-child(3),
  &:nth-child(5) {
    animation-delay: -1s, -1s;
  }
  &:nth-child(4),
  &:nth-child(6) {
    animation-delay: -6s, -6s;
  }

  &.left {
    top: 10rem;
    left: 3rem;
  }

  &.right {
    top: 10rem;
    right: 3rem;
    animation-direction: reverse;
  }

  @media (max-width: ${dimensions.medium}) {
    width: 7rem;
  }
`;
