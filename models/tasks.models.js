
const { boolean } = require("joi");
const mongoose = require("mongoose") //requerimos la libreria 
const Schema = mongoose.Schema; // accedemos a los squemas de mongoose


const taskSchema = new Schema({
    
    title: {
        type: String,
        require: true,
    },
    description: String,
    status: {
        type: Boolean,
        default : false
    },
    dueDate: String,

}, { timestamps:true}) //para añadir la fechad e creacion y modificacion


module.exports = mongoose.model("task", taskSchema);


