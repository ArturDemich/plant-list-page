import React from 'react';

import { PLANTS_ROUT } from '../utils/consts';
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";

import AddPlantContainer from './addPlantContainer';
import {setShowAddPlant} from '../storeRedux/addPlant/action';
import {useDispatch} from 'react-redux';


const NavBar = () => {   
    const dispatch = useDispatch()
    const openAddPlant = () => {        
        dispatch(setShowAddPlant(true))        
    }       
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={PLANTS_ROUT}>Plants</NavLink>
                <Button variant={"outline-light"} onClick={ () => openAddPlant()}> Add Plant </Button>

                <AddPlantContainer  />
            </Container>
        </Navbar>
    )
}

export default NavBar;