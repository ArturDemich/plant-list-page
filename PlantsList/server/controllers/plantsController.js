const {Plant} = require ('../models/models');



class PlantsController {
    async create(req, res) {
        const  {name, descrip, img} = req.body
        const plant = await Plant.create({name, descrip, img})
        
        return res.json(plant)
    }

    async getAll(req, res) {       
        let plants  = await Plant.findAll()
       
        return res.json(plants)
    }

    async getOne(req, res) {
        const id = req.params.id
        const plant = await Plant.findOne({where:{id}})
        
        return res.json(plant)
    }

    async update(req, res) {       
        const id = req.params.id
        const { name, descrip, img} = req.body 
        
        let plant = await Plant.findOne({where:{id}})
         plant.name = name
         plant.descrip = descrip         
         plant.img = img
         plant = await plant.save() 

        return res.json(plant)
    }

    async destroy(req, res) {
        const id = req.params.id
       let destroy = await Plant.destroy({where:{id}})

       return res.json(destroy)
    }
}

module.exports = new PlantsController();