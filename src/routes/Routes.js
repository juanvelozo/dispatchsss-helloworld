import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";

import { Home } from "../pages/Home";
import { Joke } from "../pages/Joke";

export const Routes = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/daftpunk">
            <Joke />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};
