import {makeAutoObservable} from "mobx";

export default class PlantsStore {
    constructor() {        
        this._plants = []        
        this._page = 1
        this._onePlant = {}
        makeAutoObservable(this)
    }
    setOnePlant(onePlant) {
        this._onePlant = onePlant
    }
        
    setPlants(plants) {
        this._plants = plants
    }
    setPage(page) {
        this._page = page
    }
    
    get plants() {
        return this._plants
    }    
    get page() {
        return this._page
    }
    get onePlant() {
        return this._onePlant
    }    
}
