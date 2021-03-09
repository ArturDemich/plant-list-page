import React from 'react';
import {connect} from 'react-redux';
import EditPlant from './modals/ediPlant'; 
import {setImage, setNamePlant, setDescription, setShowEditPlant, setIdEditPlant} from '../storeRedux/editPlant/action';

class EditPlantContainer extends React.Component {  
        
    render() {
        return (<EditPlant 
        image={this.props.image} 
        namePlant={this.props.namePlant} 
        description={this.props.description} 
        show={this.props.show}
        idcard={this.props.idcard}
        
        plantId={this.props.idcard}
               
        setImage={this.props.setImage}
        setNamePlant={this.props.setNamePlant}
        setDescription={this.props.setDescription}
        setShowEditPlant={this.props.setShowEditPlant}
        setIdEditPlant={this.props.setIdEditPlant}      
        />)
    }
}
  
const mapStateToProps = state => {
    
    return {
        image: state.editPlant.image,
        namePlant: state.editPlant.namePlant,
        description: state.editPlant.description,
        show: state.editPlant.show,
        idcard: state.editPlant.idcard
    }
}

const mapDispatchToProps = {
    setImage,
    setNamePlant,
    setDescription,
    setShowEditPlant,
    setIdEditPlant
}

export default connect(mapStateToProps, mapDispatchToProps) (EditPlantContainer);