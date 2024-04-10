


let tasksList = [
    
        {
            id: 1,
            title: "Cambiar estilos",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.",
            status: ["IN_PROGRESS", "DONE"],
            dueDate: "",
            user: 12312,
            createdAt: "21/04/2024",
            modifiedAt: "22/04/2024",
            deletedAt: "24/04/2024"
        },
        {
            id: 2,
            title: "Revisar funcionalidades de la aplicación",
            description: "Suspendisse potenti. Curabitur at tortor sit amet libero lacinia dictum. Nullam auctor, velit nec pharetra tristique, tortor arcu tristique est, ac scelerisque mi sapien vel magna.",
            status: ["IN_PROGRESS"],
            dueDate: "30/04/2024",
            user: 54321,
            createdAt: "23/04/2024",
            modifiedAt: "24/04/2024",
            deletedAt: null
        },
        {
            id: 3,
            title: "Crear informe de progreso",
            description: "Pellentesque vitae metus sit amet ligula mattis sodales sed sed justo. Quisque quis dui eu elit interdum convallis. Nullam in nisi euismod, ullamcorper libero ut, vestibulum tortor.",
            status: ["IN_PROGRESS"],
            dueDate: "",
            user: 78900,
            createdAt: "25/04/2024",
            modifiedAt: "26/04/2024",
            deletedAt: null
        },
        {
            id: 4,
            title: "Desarrollar nueva función de búsqueda",
            description: "Duis ac nisi nec neque tincidunt bibendum. Integer mattis dolor eu justo vehicula ultrices. Ut vitae odio quis sapien tempor varius ac et ligula.",
            status: ["IN_PROGRESS"],
            dueDate: "10/05/2024",
            user: 13579,
            createdAt: "27/04/2024",
            modifiedAt: "28/04/2024",
            deletedAt: null
        },
        {
            id: 5,
            title: "Optimizar rendimiento del servidor",
            description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sodales, velit at sodales tincidunt, ipsum augue elementum metus, nec egestas neque nisi non dolor.",
            status: ["IN_PROGRESS"],
            dueDate: "",
            user: 24680,
            createdAt: "29/04/2024",
            modifiedAt: "30/04/2024",
            deletedAt: null
        },
        {
            id: 6,
            title: "Realizar pruebas de seguridad",
            description: "Fusce sed ante vel eros scelerisque scelerisque eu nec elit. Sed ut turpis massa. Donec tempor libero id fermentum consequat.",
            status: ["IN_PROGRESS"],
            dueDate: "15/05/2024",
            user: 97531,
            createdAt: "01/05/2024",
            modifiedAt: "02/05/2024",
            deletedAt: null
        }
    
        
]

const findTask = (req, res) => {
    
   return res.status(200).json(tasksList)

}

const getTaskById = (req, res) => {

    const taskFound = tasksList.find((task) => task.id === Number(req.params.id))
    if (taskFound) return res.status(200).json(taskFound)
    if (!taskFound) return res.status(404).json({"msg":"Task not found"})
    return res.status(403).json({"msg":"Forbidden"})
  
    
}

const updateTask = (req, res) => {
    return res.status(200).json({ msg: "Task updated" })
}

const deleteTask = (req, res) => {
    return res.status(200).json({"msg": "Task removed successfully"})
}

const addNewTask = (req, res) => {
    const newTask = {
        id: Number((Math.random() * 1000).toFixed()),
        // createdAt : new Date().toISOString,
        // modifiedAt: Date.now().toString ,
        deletedAt: null,
        ...req.body
    } 
    tasksList = [...tasksList,newTask]
    res.status(201).json({"msg": "Task created", "id": "123456"})
}

const completeTask = (req, res) => {
    return res.status(200).json({"msg": "Task marked as completed"})
}

module.exports = {
    findTask,
    getTaskById,
    updateTask,
    deleteTask,
    addNewTask,
    completeTask
}

