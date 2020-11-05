import React from "react";
import { useHistory } from "react-router-dom";
import { isBrowser } from "react-device-detect";
import { GameTitle } from "../../styles/common";
import { Delay } from "../../utils";
import { useAudio } from "../../utils/hooks";

import { Asteroid, Container, Content } from "./style";
import { OnlyBrowser } from "../../utils/components/OnlyBrowser";

export function StartGameMenu() {
  const audio = useAudio();
  const history = useHistory();

  // Handles item click
  function handleStartGameClick(path: string) {
    return async () => {
      audio.play();
      await Delay(100);

      history.push(path);
    };
  }

  return (
    <OnlyBrowser>
      <Container>
        <Content>
          <GameTitle className="game-title">Start Menu </GameTitle>
          <div>
            <button onClick={handleStartGameClick("/create-game")}>New Game</button>
            <button onClick={handleStartGameClick("/enter-game")}>Enter Game</button>
          </div>

          <Asteroid src={require("../../assets/sprites/Big asteroid 1.svg")} className="left" />
          <Asteroid src={require("../../assets/sprites/Big asteroid 3.svg")} className="left" />
          <Asteroid src={require("../../assets/sprites/Medium asteroid 1.svg")} className="right" />
          <Asteroid src={require("../../assets/sprites/Medium asteroid 3.svg")} className="right" />
          {/* {asteroidList} */}
        </Content>
      </Container>
    </OnlyBrowser>
  );
}
