import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from '../RouterComponent/Home'

export default function PublicRouter(){
    return(
       <Switch>
          <Route exact path  = "/" render = {()=><Home/>}></Route>
          
       </Switch> 

    )
}