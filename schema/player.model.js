const { default: mongoose } = require("mongoose");

const playersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        default:"https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
    },
    role:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    birth_place:{
            type:String,
            required:true
        },
    player_id:{
        type:String,
        unique:true,
        required:true,
    }
},{timestamps:true})

const IndianPlayer = mongoose.model('IndianPlayer' , playersSchema)
module.exports = IndianPlayer