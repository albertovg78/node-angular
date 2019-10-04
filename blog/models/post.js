let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let postSchema = new Schema({
    fecha: Date,
    categoria: String,
    titulo: String,
    imagen:  String,
    descripcion: String,
    contenido: String,
    autor: String
    

})



module.exports = mongoose.model('Post', postSchema)