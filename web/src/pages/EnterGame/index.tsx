import React, { useEffect, useState } from "react";
import { AiFillLock } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Delay } from "../../utils";
import { OnlyBrowser } from "../../utils/components/OnlyBrowser";
import { useAudio } from "../../utils/hooks";

// import "./style.css";
import {
  Container,
  Content,
  Title,
  SearchContainer,
  SearchList,
  PlayerShip,
  AlienShip,
} from "./style";

interface IRoomData {
  id: string | number;
  name: string;
  players: number;
  isSecret: boolean;
}

export function EnterGame() {
  const [roomName, setRoomName] = useState("");
  const audio = useAudio({ name: "Start game.wav" });
  const history = useHistory();

  const roomList: IRoomData[] = [
    {
      id: 2,
      name: "Example 2",
      players: 2,
      isSecret: false,
    },
    {
      id: 2,
      name: "Example 2",
      players: 2,
      isSecret: true,
    },
    {
      id: 2,
      name: "Example 2",
      players: 2,
      isSecret: false,
    },
  ];

  // Handles enter game action
  function handleEnterGame(gameId: string | number) {
    return async () => {
      audio.play();
      await Delay(100);

      history.push("/game");
    };
  }
  // Handle change room name
  function handleRoomName(event: React.ChangeEvent<HTMLInputElement>) {
    setRoomName(event.target.value);
  }
  // Handles submit
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <OnlyBrowser>
      <Container>
        <Content>
          <Title>Enter Game</Title>

          <SearchContainer>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-item"
                placeholder="Room name..."
                onChange={handleRoomName}
              />
              <button type="submit">Search</button>
            </form>

            {/* Room list */}
            <SearchList>
              {roomList.map((room) => (
                <li>
                  <button onClick={handleEnterGame(room.id)}>
                    <span className="room-name">{room.name}</span>
                    <div>
                      {room.isSecret && <AiFillLock className="lock" />}
                      <span className="player-count">
                        {room.players} {room.players == 1 ? "player" : "players"}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
            </SearchList>
          </SearchContainer>

          <AlienShip src={require("../../assets/sprites/Alien ship.svg")} />
          <PlayerShip src={require("../../assets/sprites/Ship.svg")} />
        </Content>
      </Container>
    </OnlyBrowser>
  );
}

// import React, { useEffect, useState } from "react";
// import { AiFillLock } from "react-icons/ai";
// import { useHistory } from "react-router-dom";
// import { Delay } from "../../utils";
// import { useAudio } from "../../utils/hooks";

// import "./style.css";

// interface IRoomData {
//   id: string | number;
//   name: string;
//   players: number;
//   isSecret: boolean;
// }

// export function EnterGame() {
//   const [roomName, setRoomName] = useState("");
//   const audio = useAudio({ name: "Start game.wav" });
//   const history = useHistory();

//   const roomList: IRoomData[] = [
//     {
//       id: 2,
//       name: "Example 2",
//       players: 2,
//       isSecret: false,
//     },
//   ];

//   // Handles enter game action
//   function handleEnterGame(gameId: string | number) {
//     return async () => {
//       audio.play();
//       await Delay(100);

//       history.push("/game");
//     };
//   }
//   // Handle change room name
//   function handleRoomName(event: React.ChangeEvent<HTMLInputElement>) {
//     setRoomName(event.target.value);
//   }
//   // Handles submit
//   function handleSubmit(event: React.FormEvent) {
//     event.preventDefault();
//   }

//   return (
//     <div id="enter-game" className="centralized">
//       <h1 className="game-title">Enter Game</h1>

//       <div id="search-container">
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             className="form-item"
//             placeholder="Room name..."
//             onChange={handleRoomName}
//           />
//           <button type="submit">Search</button>
//         </form>
//         {/* Room list */}
//         <ul>
//           {roomList.map((room) => (
//             <li>
//               <button onClick={handleEnterGame(room.id)}>
//                 <span className="room-name">{room.name}</span>
//                 <div>
//                   {room.isSecret && <AiFillLock className="lock" />}
//                   <span className="player-count">
//                     {room.players} {room.players == 1 ? "player" : "players"}
//                   </span>
//                 </div>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <img src={require("../../assets/sprites/Alien ship.svg")} id="alien-ship" />
//       <img src={require("../../assets/sprites/Ship.svg")} id="player-ship" />
//     </div>
//   );
// }
