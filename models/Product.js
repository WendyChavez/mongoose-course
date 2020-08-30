const { Schema, model } = require('mongoose');

// https://mongoosejs.com/docs/schematypes.html
const productSchema = new Schema({
    nombre: String,
    descripcion: String,
    precio: {
        type: Number,
        default: 0
    }
});

module.exports = model('Product', productSchema);