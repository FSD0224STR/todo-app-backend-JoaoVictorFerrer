const { Error } = require('mongoose');
const task = require('../models/tasks.models')






const findTask = (req, res) => {
  
};

const getTaskById = (req, res) => {
  task.findById(req.params.id).populate('user')
    .then(taskDocs => {
       const idUser = taskDocs.user._id
      console.log('esto es taskid', taskDocs._id.toString())
      const validId = '661fc2bbf07b1c03cc62a754'

      if (idUser.toString() === validId) {
        console.log('Found this: ', taskDocs)
        return res.status(200).json(taskDocs )  
       
      } 
   
    })
    .catch(err => {
      console.log('Error while getting the Task: ', err)
      res.status(404).json({ msg: 'Task not found' })
    });
};

const updateTask = async (req, res) => {
 
  
  try {
    let update = req.body
    let id = req.params.id
    const updateTask = await task.findByIdAndUpdate(id, update, { new: true })
    console.log('esto es updateTask', updateTask)

    if (!updateTask.title || !updateTask.description) {
      
      return res.status(400).json({ msg:"You missed parameters: 'title' or 'description'"})
    }
      return res.status(200).json({msg: "Task updated" })

  } catch(error) {
    return res.status(404).json({ msg: 'Task not found' })
  }




};

async function deleteTaskById(req, res) {

  try {
    
    const data = await task.findByIdAndDelete(req.params.id)
    if (data) return res.status(200).json({msg: "Task removed successfully"})
    return res.status(404).json({ msg: "Task not found" })
    
  } catch (error) {

    
    
  }


};

  async function addNewTask(req, res) {
    
    let taskUser = {...req.body,user:'661fc2bbf07b1c03cc62a754'} // como solo tiene un usuario , pero se tendria que mandar el id desde el front

    try {
       
    const newTask = await task.create(taskUser)

    if (!req.body.title) {
      return res.status(400).json({msg:"You missed parameter 'title'"})
    }
    return res.status(201).json({msg:'Task created', id: newTask.id})
    
  } catch(error) {
   console.log('error While created the task', error)
   return res.sendStatus(500)
  }

    
    
    
    
    
    

};

 function getTaskList(req, res) {
  
  task.find()
    .then(taskDocs => {
      // console.log('Found this: ', taskDocs)
     return res.status(200).json(taskDocs)
    })

    .catch(err => {
      console.log('Error while getting the tasks: ', err)
      res.status(400).json(err)
    });
}

 const completeTask = async(req, res) => {
  console.log('este es el id ',req.params.id)
   if (!req.params.id) {
    
     return res.status(400).json({msg: "Missing parameter: id"})
     
   }

   try {
     
     const mytask = await task.findById(req.params.id)
     const newCompletedValue = !mytask.status
     console.log(mytask.title)
     const updateTask = await task.findByIdAndUpdate(req.params.id, { $set: { status: newCompletedValue } }, {new:true})
     console.log(updateTask)
     return res.status(200).json({msg: 'Task marked as completed'})
   } catch(error) {
    console.log('error While updating the task', error)
     return res.status(404).json({ msg:"Task not found"})
   }



};

module.exports = {
  findTask,
  getTaskById,
  updateTask,
  deleteTaskById,
  addNewTask,
  completeTask,
  getTaskList
};
