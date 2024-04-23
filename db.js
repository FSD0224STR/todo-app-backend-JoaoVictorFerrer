// let tasksList = [
//   {
//     id: 1,
//     title: "Cambiar estilos",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel mi nec mauris consectetur accumsan bibendum sed lacus. In vel dignissim nunc. Donec vel nulla venenatis, tempor tortor non, dignissim est. Ut non iaculis dolor, eget aliquet metus. Nulla facilisi. Sed sed lobortis nunc. Curabitur vitae congue quam.",
//     status: "DONE",
//     dueDate: "25/04/2024",
//     user: 12312,
//     createdAt: "22/04/2024",
//     modifiedAt: "22/04/2024",
//     deletedAt: null,
//   },
//   {
//     id: 2,
//     title: "Revisar funcionalidades de la aplicación",
//     description:
//       "Suspendisse potenti. Curabitur at tortor sit amet libero lacinia dictum. Nullam auctor, velit nec pharetra tristique, tortor arcu tristique est, ac scelerisque mi sapien vel magna.",
//     status: "IN_PROGRESS",
//     dueDate: "30/04/2024",
//     user: 54321,
//     createdAt: "24/04/2024",
//     modifiedAt: "24/04/2024",
//     deletedAt: null,
//   },
//   {
//     id: 3,
//     title: "Crear informe de progreso",
//     description:
//       "Pellentesque vitae metus sit amet ligula mattis sodales sed sed justo. Quisque quis dui eu elit interdum convallis. Nullam in nisi euismod, ullamcorper libero ut, vestibulum tortor.",
//     status: "IN_PROGRESS",
//     dueDate: "28/04/2024",
//     user: 78900,
//     createdAt: "26/04/2024",
//     modifiedAt: "26/04/2024",
//     deletedAt: null,
//   },
//   {
//     id: 4,
//     title: "Desarrollar nueva función de búsqueda",
//     description:
//       "Duis ac nisi nec neque tincidunt bibendum. Integer mattis dolor eu justo vehicula ultrices. Ut vitae odio quis sapien tempor varius ac et ligula.",
//     status: "IN_PROGRESS",
//     dueDate: "10/05/2024",
//     user: 13579,
//     createdAt: "28/04/2024",
//     modifiedAt: "28/04/2024",
//     deletedAt: null,
//   },
//   {
//     id: 5,
//     title: "Optimizar rendimiento del servidor",
//     description:
//       "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sodales, velit at sodales tincidunt, ipsum augue elementum metus, nec egestas neque nisi non dolor.",
//     status: "IN_PROGRESS",
//     dueDate: "01/04/2024",
//     user: 24680,
//     createdAt: "30/04/2024",
//     modifiedAt: "30/04/2024",
//     deletedAt: null,
//   },
//   {
//     id: 6,
//     title: "Realizar pruebas de seguridad",
//     description:
//       "Fusce sed ante vel eros scelerisque scelerisque eu nec elit. Sed ut turpis massa. Donec tempor libero id fermentum consequat.",
//     status: "IN_PROGRESS",
//     dueDate: "15/05/2024",
//     user: 97531,
//     createdAt: "14/05/2024",
//     modifiedAt: "02/05/2024",
//     deletedAt: null,
//   },
// ];




////   // const formatDate = () => {
  //   const dateNow = new Date();
  //   let day = dateNow.getDate();
  //   let month = dateNow.getMonth();
  //   let year = dateNow.getFullYear();

  //   if (day < 10) {
  //     day = "0" + day;
  //   }
  //   if (month < 10) {
  //     month = "0" + (month + 1);
  //   }

  //   const formatedDate = `${day}/${month}/${year}`;

  //   return formatedDate;
  // };

  // const newTask = {
  //   id: Number((Math.random() * 1000).toFixed()),
  //   createdAt: formatDate(),
  //   modifiedAt: undefined,
  //   deletedAt: undefined,
  //   status: "IN_PROGRESS",
  //   ...req.body,
  // };
  // tasksList = [...tasksList, newTask];
// res.status(201).json({ msg: "Task created", id: "123456" });
  









// ///////////////alert front



// console.log(removeTitle, "este es title remove");
// swal({
//   title: `Eliminar esta tarea: ${removeTitle.title}`,
//   text: "Estas seguro que deseas eliminar este archivo?",
//   icon: "warning",
//   buttons: ["No", "Si"],
// })
//   .then((respuesta) => {
//     if (respuesta) {
//       fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" });

//       swal({
//         text: "El archivo se ha borrado con éxito",
//         icon: "success",
//       });
//     }
//   })
// //   await .then(renderTasks());
// }
