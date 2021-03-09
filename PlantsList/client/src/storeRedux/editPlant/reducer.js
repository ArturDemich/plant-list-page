import {EDIT_PLANT_CHANGE_IMAGE, EDIT_PLANT_CHANGE_NAME_PLANT, EDIT_PLANT_CHANGE_DESCRIPTION, SHOW_EDIT_PLANT, ID_EDIT_PLANT} from './action';

const defaultState = {
    image: '',
    namePlant: '',
    description: '',
    show: false,
    idcard: ''
}

export const addEditPlantReducer = (state = defaultState, action) => {
    console.log(state)
    switch (action.type) {
        case EDIT_PLANT_CHANGE_IMAGE:
            return {
                ...state, 
                image: action.payload
            }

            case EDIT_PLANT_CHANGE_NAME_PLANT:
            return {
                ...state, 
                namePlant: action.payload
            }

            case EDIT_PLANT_CHANGE_DESCRIPTION:
            return {
                ...state, 
                description: action.payload
            }

            case SHOW_EDIT_PLANT:
            return {
                ...state, 
                show: action.payload
            }

            case ID_EDIT_PLANT:
            return {
                ...state, 
                idcard: action.payload
            }
    }
    return state
}