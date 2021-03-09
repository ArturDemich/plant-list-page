import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlantList from '../components/PlantsList';
import { AddPlant } from '../components/modals/addPlant';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchPlant} from '../http/plantApi';

const Plants = observer (() => {
    const {plant} = useContext(Context)

    useEffect(() => {     
        fetchPlant().then(data => plant.setPlants(data))   
        
    }, [])
   
    return (
        <Container >
            <Row className="justify-content-center mb-5">
                <Col md={11} >
                    
                    <PlantList />
                    
                </Col>
            </Row>
            
        </Container> 
        
    )
});

export default Plants;