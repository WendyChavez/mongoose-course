require('../connection');

const Product = require('../models/Product');

const someFunction = async () => {
    //Busca todas las coincidencias y elimina solo 1
    // const deletedProduct = await Product.deleteOne({name: 'laptop hp'});
    //Elimina todas las coincidencias
    // const result = await Product.deleteMany({name: 'laptop hp'});
    //Solo busca una coincidencia y la elimina
    // const result = await Product.findOneAndDeletmousee({name: 'mouse'});
    //Elimina utilizando id
    const result = await Product.findByIdAndDelete('5e290e03a1def223dc11c70d');

    console.log(result);

};

someFunction();