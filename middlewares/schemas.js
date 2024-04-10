
const Joi = require('joi');

const taskSchema = Joi.Object({

    title: Joi.string().required(),
    description: Joi.string(),
    status: Joi.string()
    

})
