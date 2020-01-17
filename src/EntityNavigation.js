import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bulma-components';
import { matchPath } from 'react-router';

import './EntityNavigation.css'

const EntityNavigation = () =>{
    return(
        <container>
            <NavLink to="/starships" activeClassName="bt-active"><Button color="black">Starships</Button></NavLink>
            <NavLink to="/starships" activeClassName="bt-active"><Button color="black">Starships</Button></NavLink>
            <NavLink to="/starships" activeClassName="bt-active"><Button color="black">Starships</Button></NavLink>
        </container>
    )
}

export default EntityNavigation