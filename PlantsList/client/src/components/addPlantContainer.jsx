import React from 'react';
import {connect} from 'react-redux';
import AddPlant from './modals/addPlant'; 
import {setImage, setNamePlant, setDescription, setShowAddPlant} from '../storeRedux/addPlant/action';

class AddPlantContainer extends React.Component {
    
    render() {
        return (<AddPlant 
        image={this.props.image} 
        namePlant={this.props.namePlant} 
        description={this.props.description} 
        show={this.props.show}
        
        setImage={this.props.setImage}
        setNamePlant={this.props.setNamePlant}
        setDescription={this.props.setDescription}
        setShowAddPlant={this.props.setShowAddPlant}        
        />)
    }
}

const mapStateToProps = state => {
    
    return {
        image: state.addPlant.image,
        namePlant: state.addPlant.namePlant,
        description: state.addPlant.description,
        show: state.addPlant.show
    }
}

const mapDispatchToProps = {
    setImage,
    setNamePlant,
    setDescription,
    setShowAddPlant
}

export default connect(mapStateToProps, mapDispatchToProps) (AddPlantContainer);