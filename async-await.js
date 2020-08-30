require('./connection');

const Product = require('./models/Product')

async function main() {
    const product  = new Product({
        nombre: 'Monitor',
        descripcion: 'Alta definicion',
        precio: 350
    });
    const productSaved = await product.save();
    return productSaved;
}

main()
    .then(productSaved => console.log(productSaved))
    .catch(err => console.log(err));