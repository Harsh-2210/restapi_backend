
const { default: mongoose } = require("mongoose");

const coonectDB = () => {

    mongoose.connect('mongodb+srv://HarshSrivastava:viGvpnNEcObU9Z24@cluster0.2pxttct.mongodb.net/Player')
    
    .then((result)=>{console.log('connected to database');
    })
    .catch((err)=>{console.log(err);
    });
}

module.exports = coonectDB
