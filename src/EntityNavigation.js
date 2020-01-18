import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bulma-components';
import { matchPath } from 'react-router';

import './EntityNavigation.css'

const EntityNavigation = () =>{
    return(
        <div>
            <NavLink to="/starships" activeClassName="bt-active"><Button color="black">Starships</Button></NavLink>
            <NavLink to="/persons" activeClassName="bt-active"><Button color="black">People</Button></NavLink>
            <NavLink to="/vehicles" activeClassName="bt-active"><Button color="black">Vehicles</Button></NavLink>
            <NavLink to="/planets" activeClassName="bt-active"><Button color="black">Planets</Button></NavLink>
            <NavLink to="/species" activeClassName="bt-active"><Button color="black">Species</Button></NavLink>            
        </div>
    )
}

export default EntityNavigation