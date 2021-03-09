import React from 'react';

import { Modal, Form, Button } from 'react-bootstrap';
import {createPlant} from "../../http/plantApi";

export default class AddPlant extends React.Component {

    constructor(props) {
        super(props)
        this.onImageChange = this.onImageChange.bind(this)
        this.onNamePlantChange = this.onNamePlantChange.bind(this)
        this.onDescriptionChange = this.onDescriptionChange.bind(this)
        this.closeAddPlant = this.closeAddPlant.bind(this)
        this.sendPlant = this.sendPlant.bind(this)
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
    
    closeAddPlant(event) {
        this.props.setShowAddPlant(false)
    }   
    
     sendPlant = () => {        
        const formData = new FormData()
        formData.append('name', this.props.namePlant)        
        formData.append('img', this.props.image)        
        formData.append('descrip', this.props.description) 
        console.log(this.props.description)

        createPlant(formData).then(() => this.closeAddPlant())
    } 

    render() {
    return (
        <Modal show={this.props.show} >
            <Modal.Header >
                <Modal.Title> Add Plant </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group >
                        <Form.Label>Choose image</Form.Label>
                        <Form.Control  
                        value={this.props.image} 
                        type="input" placeholder="Write URL:" 
                        onChange={this.onImageChange} 
                        />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Name plant</Form.Label>
                        <Form.Control 
                        value={this.props.namePlant} 
                        onChange={this.onNamePlantChange} 
                        type="input" 
                        placeholder="Write..." 
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descriptions</Form.Label>
                        <Form.Control 
                        value={this.props.description}
                        onChange={this.onDescriptionChange}                          
                        as="textarea" 
                        rows={3} 
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={ () => this.sendPlant()}>Add</Button>
                <Button variant="secondary" onClick={ () => this.closeAddPlant()}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}};


 