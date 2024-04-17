const express = require('express');
const router = express.Router();
const {findTask,getTaskById,updateTask,deleteTaskById,addNewTask,completeTask,getTaskList} = require('../controllers/taskController')


router.get('/',getTaskList,findTask) //lista de tareas
router.get('/:id',getTaskById) //obtener detalles de una tarea
router.put('/:id',updateTask)// editar tareas
router.delete('/:id',deleteTaskById) // eliminar tarea
router.post('/',addNewTask) //añadir una tarea nueva
router.patch('/:id',completeTask)//completar tarea



module.exports = router;