const {Farmacias}= require('../models/farmacia')

class Controller {
    async listar (req,res){
        const items = await Farmacias.find()
        res.status(200).json(items);
    }

    async crear (req, res){
        try {
            const items = new Farmacias(req.body);
            await items.save();
            res.stuctoatus(201).json(items)
        } catch (error) {
            res.status(501).json({msg : 'no se pudo guardar el medicamento:' , error})
        }
    }
    editar (req, res){
        res.status(201).json({msg : "objeto editado"})
    }
    eliminar (req, res){
        res.status(201).json({msg : "objeto eliminado"})
    }

}

module.exports = new Controller

