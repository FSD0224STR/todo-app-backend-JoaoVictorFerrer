const { Error } = require('mongoose');
const task = require('../models/tasks.models')


const findTask = (req, res) => {
  // return res.status(200).json(tasksList);
};

const getTaskById = (req, res) => {
  // const taskFound = tasksList.find((task) => task.id === Number(req.params.id));
  // if (taskFound) return res.status(200).json(taskFound);
  // if (!taskFound) return res.status(404).json({ msg: "Task not found" });
  // return res.status(403).json({ msg: "Forbidden" });
};

const updateTask = (req, res) => {
  // return res.status(200).json({ msg: "Task updated" });
};

async function deleteTaskById(req, res) {

  // task.findByIdAndDelete(req.params.id) // .findByIdAndRemove() works the same as .findByIdAndDelete()
  //   .then(deletedtask => {
  //     console.log(`Deleted student with id: ${deletedtask._id}`)
  //      return res.status(200).json(deletedtask)
  //   })
  //   .catch(error => console.log('Error while deleting one task: ', error));
  //    return res.status(400).json(Error)

  try {
    
    const data = await task.findByIdAndDelete(req.params.id)
    if (data) return res.json('borrado')
    res.status(404).json('no se ha podido eliminar')
    
  } catch (error) {

    res.status(500).json(error)
    
  }


};

async function addNewTask(req, res) {
  console.log('este es el req.body de add task',req.body)

  task.create(req.body)
    
    .then(taskDoc => {
      console.log(taskDoc)
      console.log(`task create worked well: ${taskDoc}`)
     return res.status(200).json(taskDoc)
  })

  .catch(error => {
      console.log(`Creating a new student went wrong! Try again 😞 ${error}`)
      res.status(400).json(error)
  } );


};

async function getTaskList(req, res) {
  
  task.find()
    .then(taskDocs => {
      // console.log('Found this: ', taskDocs)
     return res.status(200).json(taskDocs)
    })

    .catch(err => {
      console.log('Error while getting the students: ', err)
      res.status(400).json(err)
    });
}

 const completeTask = async(req, res) => {
    console.log('esto es el req.body para completar tarea',req.body)

  
   try {
     const mytask = await task.findById(req.params.id)
     const newCompletedValue = !mytask.status
     console.log(mytask.title)
     const updateTask = await task.findByIdAndUpdate(req.params.id, { $set: { status: newCompletedValue } }, {new:true})
     console.log(updateTask)
     return res.status(200).json()
   } catch(error) {
    console.log('error While updating the task', error)
    return res.sendStatus(400)
   }
  //  await task.updateOne({ status: newCompletedValue })
  // await task.findByIdAndUpdate(
  //     req.params.id, //parametro identificador
  //   {
  //       $set: {status: 'DONE'} // update
  //     },
  //   {
  //       new: true //options
  //     })
    
      // .then(taskComplete => {
      //   console.log('Task Complete :', taskComplete)
      //   return res.status(200).json(taskComplete)
      // })
      // .catch(error => {
        
      // })

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
