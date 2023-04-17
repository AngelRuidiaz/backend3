const {Farmacias} = require('../models/farmacia')

const validar = async (req, res, next)=>{
    try {
        const farmacia= await Farmacias.findById(req.params.id);
        if (farmacia != null) {
            next();
        } else {
            res.json({msg:"id invalido"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
    
}

module.exports = {validar}