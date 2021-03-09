export const ADD_PLANT_CHANGE_IMAGE = 'ADD_PLANT_CHANGE_IMAGE';
export const ADD_PLANT_CHANGE_NAME_PLANT = 'ADD_PLANT_CHANGE_NAME_PLANT';
export const ADD_PLANT_CHANGE_DESCRIPTION = 'ADD_PLANT_CHANGE_DESCRIPTION'; 
export const SHOW_ADD_PLANT = 'SHOW_ADD_PLANT';
export const CLOSE_ADD_PLANT = 'CLOSE_ADD_PLANT';

export const setImage = image => ({
    type: ADD_PLANT_CHANGE_IMAGE,
    payload: image
})

export const setNamePlant = namePlant => ({
    type: ADD_PLANT_CHANGE_NAME_PLANT,
    payload: namePlant
})

export const setDescription = description => ({
    type: ADD_PLANT_CHANGE_DESCRIPTION,
    payload: description
})

export const setShowAddPlant = show => ({
    type: SHOW_ADD_PLANT,
    payload: show
})

