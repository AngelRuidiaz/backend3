const mongoose= require('mongoose')

const Schema= mongoose.Schema;
const farmaciaSchema = new Schema({
    medicamento:{type:String,
    required: true},

    laboratorio:{type:String,
    required: true},

    precio:{type:Number,
    required: true},

    contenido:{
        type:Number
    },

    descripcion:{
        type:String
    },

    enStock:{
        type:Boolean,
        required:true
    }
});

const Farmacias = mongoose.model('Farmacias',farmaciaSchema)

module.exports={Farmacias}

