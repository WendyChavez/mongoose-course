require('./connection');

const product = require('./models/product');

const myProduct = new product({
    nombre: 'laptop',
    descripcion: 'hp pavilion',
    precio: 3899.99
});

myProduct.save((err, document) => {
    if (err) {
        console.log(err);
    }
    console.log('Guardado:', document);
});