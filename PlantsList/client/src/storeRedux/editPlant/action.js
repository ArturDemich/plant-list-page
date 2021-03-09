export const EDIT_PLANT_CHANGE_IMAGE = 'EDIT_PLANT_CHANGE_IMAGE';
export const EDIT_PLANT_CHANGE_NAME_PLANT = 'EDIT_PLANT_CHANGE_NAME_PLANT';
export const EDIT_PLANT_CHANGE_DESCRIPTION = 'EDIT_PLANT_CHANGE_DESCRIPTION';
export const SHOW_EDIT_PLANT = 'SHOW_EDIT_PLANT';
export const ID_EDIT_PLANT = 'ID_EDIT_PLANT';

export const setImage = image => ({
    type: EDIT_PLANT_CHANGE_IMAGE,
    payload: image
})

export const setNamePlant = namePlant => ({
    type: EDIT_PLANT_CHANGE_NAME_PLANT,
    payload: namePlant
})

export const setDescription = description => ({
    type: EDIT_PLANT_CHANGE_DESCRIPTION,
    payload: description
})

export const setShowEditPlant = show => ({
    type: SHOW_EDIT_PLANT,
    payload: show
})

export const setIdEditPlant = idcard => ({
    type: ID_EDIT_PLANT,
    payload: idcard
})