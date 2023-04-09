const mongoose= require('mongoose')
mongoose.set('strictQuery', true)
require('dotenv').config()

const connect= async()=>{
    try {
        await mongoose.connect(process.env.MONGOO_CNN);
        console.log('base de datos ON')
    } catch {
        console.log('Error de conexion')
    }
}

module.exports= {connect}