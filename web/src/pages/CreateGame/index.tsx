import React, { useState } from "react";

import downArrow from "../../assets/down-arrow.svg";
import Ship from "../../assets/sprites/Ship.svg";
import { useAudio } from "../../utils/hooks";
import { Delay } from "../../utils";
import { useHistory } from "react-router-dom";

import { Container, Content, SelectGameMode, GameTitle, PlayerShip } from "./style";
import { OnlyBrowser } from "../../utils/components/OnlyBrowser";

export function CreateGame() {
  const audio = useAudio({ name: "Start game.wav" });
  const history = useHistory();
  const [playerName, setPlayerName] = useState<string>();
  const [isMultiplayer, setIsMultiplayer] = useState<boolean>(false);
  const [roomName, setRoomName] = useState<string>();
  const [password, setPassword] = useState<string>();

  // Handles confirm button
  async function handleConfirm(event: React.FormEvent) {
    event.preventDefault();

    const data = {
      playerName,
      mode: isMultiplayer ? "multiplayer" : "singleplayer",
      roomName,
    };

    audio.play();

    await Delay(100);
    history.push("/game");
  }

  // Handles username
  function handlePlayerName(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value);
  }

  // Handles choice game mode
  function handleGameMode(event: React.ChangeEvent<HTMLSelectElement>) {
    setIsMultiplayer(event.target.value === "multi");
  }

  // Handles room name
  function handleRoomName(event: React.ChangeEvent<HTMLInputElement>) {
    setRoomName(event.target.value);
  }

  // Handles password
  function handleRoomPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  // Checks if form is valid
  function isFormValid() {
    // Checks if player choose his name
    if (!playerName || !playerName.length) {
      return true;
    }

    // Checks if player choose room name
    if (isMultiplayer && (!roomName || !roomName.length)) {
      return true;
    }

    return false;
  }

  return (
    <OnlyBrowser>
      <Container>
        <Content>
          <GameTitle>Create Game</GameTitle>

          <form onSubmit={handleConfirm}>
            <input
              className="form-item"
              type="text"
              placeholder="Your name"
              onChange={handlePlayerName}
            />

            {/* Game mode container */}
            <SelectGameMode className="form-item">
              <img id="down-arrow" src={downArrow} alt="" />
              <select id="game-mode" onChange={handleGameMode}>
                <option value="single">Single Player</option>
                <option value="multi">Multi Player</option>
              </select>
            </SelectGameMode>

            {isMultiplayer && (
              <>
                <input
                  id="room-name"
                  className="form-item"
                  type="text"
                  placeholder="Room name"
                  onChange={handleRoomName}
                />
                <input
                  id="room-password"
                  className="form-item"
                  type="text"
                  placeholder="Room password"
                  onChange={handleRoomPassword}
                />
              </>
            )}

            <button type="submit" disabled={isFormValid()}>
              Confirm
            </button>
          </form>

          {/* Renders Ships */}
          <PlayerShip src={Ship} />
          <PlayerShip src={Ship} />
        </Content>
      </Container>
    </OnlyBrowser>
  );
}
