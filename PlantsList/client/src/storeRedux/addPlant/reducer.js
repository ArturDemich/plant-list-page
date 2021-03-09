import {ADD_PLANT_CHANGE_IMAGE, ADD_PLANT_CHANGE_NAME_PLANT, ADD_PLANT_CHANGE_DESCRIPTION, SHOW_ADD_PLANT} from './action';

const defaultState = {
    image: '',
    namePlant: '',
    description: '',
    show: false
    }

export const addPlantReducer = (state = defaultState, action) => {
    console.log(state)
    switch (action.type) {
        case ADD_PLANT_CHANGE_IMAGE:
            return {
                ...state, 
                image: action.payload
            }

            case ADD_PLANT_CHANGE_NAME_PLANT:
            return {
                ...state, 
                namePlant: action.payload
            }

            case ADD_PLANT_CHANGE_DESCRIPTION:
            return {
                ...state, 
                description: action.payload
            }

            case SHOW_ADD_PLANT:
            return {
                ...state, 
                show: action.payload
            }
    }
    return state
}