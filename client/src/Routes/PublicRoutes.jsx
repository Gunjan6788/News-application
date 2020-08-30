import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../RouterComponent/Home";
import Business from "../RouterComponent/Business";
import Technology from "../RouterComponent/Technology";
import SearchNews from "../RouterComponent/SearchNews";


export default function PublicRouter() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Home {...props}/>}></Route>
      <Route path="/business" render={() => <Business />}></Route>
      <Route path="/technology" render={() => <Technology />}></Route>
      <Route path="/searchNews" render={() => <SearchNews />}></Route>
    </Switch>
  );
}
