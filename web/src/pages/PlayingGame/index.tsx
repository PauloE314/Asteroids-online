import React, { useEffect, useRef, useState } from "react";
import { isBrowser } from "react-device-detect";
import io from "socket.io-client";

import Game from "../../game";
import { configs, getCanvasDimensions } from "../../utils";
import { api, gameEvents } from "../../utils/API";
import { OnlyBrowser } from "../../utils/components/OnlyBrowser";
import { Container, Content } from "./style";

export function PlayingGame() {
  // Gets canvas reference
  const canvasRef = useRef<HTMLCanvasElement>();
  const dimensions = getCanvasDimensions(window.innerWidth, window.innerHeight);
  let game: Game;


  // Starts game
  useEffect(() => {
    if (!isBrowser) return;

    const socket = io(configs.apiUrl, {
      path: "/game",
    });

    const data = {
      isMultiplayer: false,
      roomName: "room",
    };

    const canvasContext = canvasRef.current.getContext("2d");

    game = new Game({ screen: dimensions, canvasContext, scale: dimensions.w / 1000 });

    socket.emit(gameEvents.CreateGame, data);

    game.setup();
    game.loop();

    socket.on(gameEvents.StateUpdate, (updateData: any) => {
      game.update(updateData);
    });


    document.addEventListener("resize", (e) => {
      const newDimensions = getCanvasDimensions(window.innerWidth, window.innerHeight);
      dimensions.w = newDimensions.w;
      dimensions.h = newDimensions.h;
      canvasRef.current.width = newDimensions.w;
      canvasRef.current.height = newDimensions.h;

      if (game) {
        game.screen = newDimensions;
      }
    })
  });


  return (
    <OnlyBrowser>
      <Container>
        <Content>
          <canvas width={dimensions.w} height={dimensions.h} ref={canvasRef} />
        </Content>
      </Container>
    </OnlyBrowser>
  );
}
