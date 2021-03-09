import {combineReducers} from 'redux';
import {addPlantReducer} from './addPlant/reducer';
import {addEditPlantReducer} from './editPlant/reducer';

export default combineReducers({
    addPlant: addPlantReducer,
    editPlant: addEditPlantReducer
})