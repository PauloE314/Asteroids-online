import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { PlayingGame } from "./pages/PlayingGame";
import { CreateGame } from "./pages/CreateGame";
import { StartGameMenu } from "./pages/StartGameMenu";
import { EnterGame } from "./pages/EnterGame";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/game" exact>
        <PlayingGame />
      </Route>
      <Route path="/start-menu" exact>
        <StartGameMenu />
      </Route>
      <Route path="/create-game" exact>
        <CreateGame />
      </Route>
      <Route path="/enter-game" exact>
        <EnterGame />
      </Route>
    </BrowserRouter>
  );
}
