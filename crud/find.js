require('../connection');

const User = require('../models/User');

const searchProducts = async () => {
    const usuarios = await User.find({});
    
    console.log(usuarios);
};

searchProducts();