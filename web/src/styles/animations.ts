import { keyframes } from "styled-components";

interface IMoveAnimationProps {
  from: { x: string | null; y: string | null };
  to: { x: string | null; y: string | null };
}

export function MoveAnimation({ from, to }: IMoveAnimationProps) {
  return keyframes`
    from {
      ${from.y ? "top: " + from.y : ""};
      ${from.x ? "left: " + from.x : ""};
    }
    to {
      ${to.y ? "top: " + to.y : ""};
      ${to.x ? "left: " + to.x : ""};
    }
  `;
}

export function RotateAnimation() {
  return keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `;
}
