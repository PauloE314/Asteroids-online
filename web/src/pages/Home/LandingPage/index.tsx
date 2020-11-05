import React, { useEffect, useLayoutEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useHistory } from "react-router-dom";

import { Container, Content, StartButton, AlienShip } from "./style";
import alienShip from "../../../assets/sprites/Alien ship.svg";
import { Delay } from "../../../utils";
import { useAudio } from "../../../utils/hooks";
import { Asteroid } from "./Asteroids";

interface IBackgroundInput {
  onDownClick: () => any;
}

export function LandingPage({ onDownClick }: IBackgroundInput) {
  const [asteroidList, setAsteroidList] = useState<JSX.Element[]>([]);
  const historic = useHistory();
  const audio = useAudio();

  // Generates asteroids
  useLayoutEffect(() => {
    const spriteList = [
      "Big asteroid 2.svg",
      "Big asteroid 3.svg",
      "Medium asteroid 1.svg",
      "Medium asteroid 2.svg",
      "Medium asteroid 3.svg",
      "Big asteroid 2.svg",
      "Big asteroid 3.svg",
      "Medium asteroid 1.svg",
      "Medium asteroid 2.svg",
      "Medium asteroid 3.svg",
    ];

    const rangeX = 30 + window.innerWidth / 12;
    const rangeY = 30 + window.innerHeight / 12;

    const rangeTime = 10;

    // Sets new asteroid list
    setAsteroidList(
      spriteList.map((sprite) => (
        <Asteroid
          src={require(`../../../assets/sprites/${sprite}`)}
          from={{
            x: `${Math.floor(Math.random() * rangeX)}rem`,
            y: `${Math.floor(Math.random() * rangeY)}rem`,
          }}
          to={{
            x: `${Math.floor(Math.random() * rangeX)}rem`,
            y: `${Math.floor(Math.random() * rangeY)}rem`,
          }}
          style={{ opacity: Math.random() + 0.01 }}
          speed={15 + Math.floor(Math.random() * rangeTime)}
        />
      ))
    );
  }, []);

  // Handles start game click
  async function handleStartGame() {
    await audio.play();

    await Delay(100);

    historic.push("/start-menu");
  }

  return (
    <Container>
      <Content>
        <h1>Asteroids</h1>

        {/* Start button */}
        <StartButton onClick={handleStartGame}>Press START to PLAY</StartButton>

        {/* Down Arrow */}
        <a onClick={onDownClick}>
          <IoIosArrowDown color="white" size="5rem" />
        </a>
      </Content>

      {/* Renders asteroids */}
      {asteroidList}

      {/* Renders alien ship */}
      <AlienShip id="alien-ship" src={alienShip} alt="Alien ship" />
    </Container>
  );
}

// import React, { useEffect, useState } from "react";
// import path from "path";
// import { IoIosArrowDown } from "react-icons/io";
// import { useHistory } from "react-router-dom";

// import "./style.css";
// import alienShip from "../../../assets/sprites/Alien ship.svg";
// import { Delay } from "../../../utils";
// import { useAudio } from "../../../utils/hooks";

// interface IBackgroundInput {
//   onDownClick: () => any;
// }

// export function LandingPage({ onDownClick }: IBackgroundInput) {
//   const [asteroidList, setAsteroidList] = useState<JSX.Element[]>([]);
//   const historic = useHistory();
//   const audio = useAudio();

//   // Generates asteroids
//   useEffect(() => {
//     const spriteList = [
//       "Big asteroid 2.svg",
//       "Big asteroid 3.svg",
//       "Medium asteroid 1.svg",
//       "Medium asteroid 2.svg",
//       "Medium asteroid 3.svg",
//     ];

//     const offSet = 12;

//     const randomSpriteList: any[] = [
//       {
//         name: spriteList[Math.floor(Math.random() * spriteList.length)],
//         style: {
//           top: `${8.5 + Math.random() * offSet}rem`,
//           left: `${8.5 + Math.random() * offSet}rem`,
//         },
//       },
//       {
//         name: spriteList[Math.floor(Math.random() * spriteList.length)],
//         style: {
//           bottom: `${8.5 + Math.random() * offSet}rem`,
//           right: `${8.5 + Math.random() * offSet}rem`,
//         },
//       },
//       {
//         name: spriteList[Math.floor(Math.random() * spriteList.length)],
//         style: {
//           top: `${8.5 + Math.random() * offSet}rem`,
//           right: `${8.5 + Math.random() * offSet}rem`,
//         },
//       },
//       {
//         name: spriteList[Math.floor(Math.random() * spriteList.length)],
//         style: {
//           bottom: `${8.5 + Math.random() * offSet}rem`,
//           left: `${8.5 + Math.random() * offSet}rem`,
//         },
//       },
//     ];

//     // Sets new asteroid list
//     setAsteroidList(
//       randomSpriteList.map((sprite) => (
//         <img
//           src={require(`../../../assets/sprites/${sprite.name}`)}
//           className="asteroid"
//           style={sprite.style}
//           alt="Asteroid"
//         />
//       ))
//     );
//   }, []);

//   // Handles start game click
//   async function handleStartGame() {
//     await audio.play();

//     await Delay(100);

//     historic.push("/start-menu");
//   }

//   return (
//     <div id="landing-page">
//       <div id="title-container">
//         <h1>Asteroids</h1>

//         {/* Start button */}
//         <button id="start-game-button" onClick={handleStartGame}>
//           Press START to PLAY
//         </button>

//         {/* Down Arrow */}
//         <a id="down-arrow" onClick={onDownClick}>
//           <IoIosArrowDown color="white" size="5rem" />
//         </a>
//       </div>

//       {/* Renders asteroids */}
//       {asteroidList}

//       {/* Renders alien ship */}
//       <img id="alien-ship" src={alienShip} alt="Alien ship" />
//     </div>
//   );
// }
