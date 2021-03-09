const sequelize = require('../db');
const {DataTypes} = require('sequelize');


const Plant = sequelize.define('plants', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING(10000), uniqe: true, allowNull: false},
    img: {type: DataTypes.STRING(10000), allowNull: false},
    descrip: {type: DataTypes.TEXT, allowNull: false}    
})


module.exports = {    
    Plant
}