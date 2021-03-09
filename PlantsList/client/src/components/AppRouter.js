import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {observer} from "mobx-react-lite";
import { publicRoutes } from "../routes";
import { PLANTS_ROUT } from '../utils/consts';

const AppRouter = observer(() => {

    return (
        <Switch>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path = {path} component = {Component} exact />
            )}
            <Redirect to={PLANTS_ROUT} />

        </Switch>
    )
});

export default AppRouter;