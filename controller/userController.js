const {Farmacias}= require('../models/farmacia')

class Controller {
    async listar (req,res){
        const items = await Farmacias.find()
        res.status(200).json(items);
    }

    async buscarPorId(req,res){
        const items = await Farmacias.findById(req.params.id)
        res.status(200).json(items)
    }

    async crear (req, res){
        try {
            const items = new Farmacias(req.body);
            await items.save();
            res.status(201).json(items)
        } catch (error) {
            res.status(501).json({msg : 'no se pudo guardar el medicamento:' , error})
        }
    }
    async editar (req, res){
        await Farmacias.findByIdAndUpdate(req.params.id)
        res.status(202).json({msg : "objeto editado"})
    }
    async eliminar (req, res){
        await Farmacias.findByIdAndDelete(req.params.id)
        res.json({msg : "objeto eliminado"+ req.params.id + "se borro con exito"})
    }

}

module.exports = new Controller

