require('../connection');

const User = require('../models/User');

const someFunction = async () => {
    const user = await User.findOne({username: 'Wendy'});
    user.name = 'Juan';
    await user.save();
    console.log(user);
};

const otherFunction = async () => {
    const user = await User.findOneAndUpdate({username: 'Wendy'}, {
        name: 'Jesus'
    }, {new: true});
    console.log(user);
};

someFunction();
//otherFunction();