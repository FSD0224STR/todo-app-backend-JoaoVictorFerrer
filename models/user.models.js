const mongoose = require("mongoose") //requerimos la libreria 
const Schema = mongoose.Schema; // accedemos a los squemas de mongoose


const userSchema = new Schema({
    
    firstname: {
        type: String,
        require: true,
    },
    lastname: String,
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    

},) 


module.exports = mongoose.model("User", userSchema);
