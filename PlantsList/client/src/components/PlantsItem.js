import React from 'react';

import { Card, Col, Button, Image, ListGroup } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {setShowEditPlant, setIdEditPlant, setNamePlant, setImage, setDescription} from '../storeRedux/editPlant/action';
import EditPlantContainer from './editPlantContainer';

const PlantsItem = ({ idcard, plant}) => {     

    const dispatch = useDispatch()

    const OpenEditPlant = (prop) => {        
        dispatch(setShowEditPlant(true))
        dispatch(setIdEditPlant(prop)) 
        
        dispatch(setNamePlant(plant.name))
        dispatch(setImage(plant.img))
        dispatch(setDescription(plant.descrip))
    }          
    
    return (
        <div>
        <Col md={4} className={"mt-4"} >
            <Card style={{width: 300  }} border={"light"} idcard={plant.id} >
                <Image width={300} height={300} src={plant.img}/>                
                
                <Card.Title>   
                    <div className='namePlant'>{plant.name}</div>
                </Card.Title>

                <ListGroup >
                <ListGroup.Item style={{height: 150, overflow: 'auto'}}>
                    <div className='descrip'>{plant.descrip}</div>
                </ListGroup.Item>
                    <Button variant="outline-secondary mt-1" style={{cursor: 'pointer'}} onClick={() => OpenEditPlant(idcard)}>Edit</Button>
                </ListGroup>
            </Card>
        </Col>

        <EditPlantContainer 
        plantId={idcard}          
        />
    </div >
    )
};

export default PlantsItem;