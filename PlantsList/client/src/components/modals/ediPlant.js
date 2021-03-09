import React, { useState, useContext, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Context } from '../../index';
import { observer } from "mobx-react-lite";
import {useParams} from 'react-router-dom';
import {fetchOnePlant, deletePlant, updatePlant} from "../../http/plantApi";

export default class EditPlant extends React.Component {  

    constructor(props) {
        super(props)
        this.onImageChange = this.onImageChange.bind(this)
        this.onNamePlantChange = this.onNamePlantChange.bind(this)
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.closeEditPlant = this.closeEditPlant.bind(this)
        this.sendDelete = this.sendDelete.bind(this)
        this.sendUpdate = this.sendUpdate.bind(this)
    }    

    onImageChange(event) {
        this.props.setImage(event.target.value)
    }

    onNamePlantChange(event) {
        this.props.setNamePlant(event.target.value)
    }

    onDescriptionChange(event) {
        this.props.setDescription(event.target.value)
    } 
   
    
    closeEditPlant(event) {
        this.props.setShowEditPlant(false)
        
    }   

    sendDelete = () => {  
        deletePlant(this.props.plantId).then(() => this.closeEditPlant())
    }

    sendUpdate = () => {  
        const formData = new FormData()
        formData.append('name', this.props.namePlant)        
        formData.append('img', this.props.image)        
        formData.append('descrip', this.props.description)        

        updatePlant(this.props.plantId, formData).then(() => this.closeEditPlant())
    }    

    render() {
    return (
        <Modal show={this.props.show} >
            <Modal.Header >
                <Modal.Title> Change Plant </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group >
                        <Form.Label>Choose image</Form.Label>
                        <Form.Control 
                        type="input" 
                        defaultValue={this.props.image}                        
                        onChange={this.onImageChange}/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Name plant</Form.Label>
                        <Form.Control 
                        defaultValue={this.props.namePlant}
                        type="input"                         
                        onChange={this.onNamePlantChange}/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descriptions</Form.Label>
                        <Form.Control 
                        defaultValue={this.props.description}
                        as="textarea" 
                        rows={3}                          
                        onChange={this.onDescriptionChange}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button className="d-block mr-auto" variant="danger" onClick={this.sendDelete}>Delete Card</Button>
                <Button variant="primary" onClick={this.sendUpdate}>Save changes</Button>
                <Button variant="secondary" onClick={ () => this.closeEditPlant(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}};