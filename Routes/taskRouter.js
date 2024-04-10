const express = require('express');
const router = express.Router();
const {findTask,getTaskById,updateTask,deleteTask,addNewTask,completeTask} = require('../controllers/taskController')

router.get('/',findTask) //lista de tareas
router.get('/:id',getTaskById) //obtener detalles de una tarea
router.put('/:id',updateTask)// editar tareas
router.delete('/:id',deleteTask) // eliminar tarea
router.post('/',addNewTask)
router.patch('/:id',completeTask)//completar tarea



module.exports = router;