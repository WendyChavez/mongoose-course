require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {

    const laptop = new Product({
        nombre: 'laptop hp',
        descripcion: 'hp pavilion 15',
        precio: 1999.99
    });
    await laptop.save();

    const products = await Product.find({nombre: 'laptop hp'});
    console.log(products)

};

someFunction();