import React from "react";
import styled from "styled-components";
import { MoveAnimation, RotateAnimation } from "../../../styles/animations";

interface AsteroidProps {
  from: { x: string; y: string };
  to: { x: string; y: string };
  src: any;
  speed?: number;
  size?: string;
  style?: any;
}

export function Asteroid({ from, to, speed, src, size, style }: AsteroidProps) {
  const moveAnimation = MoveAnimation({ from, to });
  const rotationAnimation = RotateAnimation();

  const Image = styled.img`
    position: absolute;
    top: ${from.y};
    left: ${from.x};
    animation: ${moveAnimation} ${speed || "2"}s linear infinite alternate,
      ${rotationAnimation} 10s linear infinite;
    width: ${size || "10rem"};
  `;

  return <Image src={src} style={style} />;
}
