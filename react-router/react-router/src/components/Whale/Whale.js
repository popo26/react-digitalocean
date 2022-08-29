import React from "react";
import {useRouteMatch, Switch, Route} from "react-router-dom";
import Beluga from "./Beluga";
import Blue from "./Blue";


export default function Whale(){
    ////below 3 lines for when using useLocation/////
    // const {search} = useLocation();
    // const match = search.match(/type=(.*)/);
    // const type = match?.[1];

    ////below 1 line for when using useParams/////////
    // const {type} = useParams();

    const {path} = useRouteMatch();

    return (
        <>
       <h2>Whale</h2>

       {/* Below 2 lines for when using useLocation or useParams */}
       {/* {type === 'beluga' && <Beluga />}
       {type === 'blue' && <Blue />} */}

       <Switch>
        <Route path={`${path}/beluga`}>
            <Beluga />
        </Route>
        <Route path={`${path}/blue`}>
        <Blue />
        </Route>
       </Switch>
        </>
    
    );
}