// Copiado de EDnotes
// Todos los derechos reservados a Beto y Alexys. 
// Ademas de al equipo de EDteam. Gracias por su trabajo!

// Este codigo sera modificado posteriormente para que quede 
// mejor graficamente.

// los cambios no se han testeado

const readline = require('readline');

// Creamos un arreglo vacío para almacenar nuestras notas
let notas = [];

// Creamos una instancia de readline para leer la entrada del usuario
const rl = readline.createInterface({
 // prompt: process.prompt,
  input: process.stdin,
  output: process.stdout
});

nota= createInterface({
  no,
  titulo,
  contenido,
  fecha_creacion
})

// Función para agregar una nota
function agregarNota() {
  console.clear()
  rl.question('Escribe el titulo de tu nota: ', (resumen) => {
    if(resumen.length>50){
      agregarNota()
    }
    rl.question('Escribe el contenido de tu nota: ', (escrito)=> {
      // Agregamos la nota al arreglo
      let id=0;
      if(notas.length!=0){
        id=notas.length-1;
      }

      let nota = new nota(
        id,resumen, escrito,Date.now()
      )
      notas.push(nota);
      console.log('Nota agregada correctamente');

      menu();
    })
    
  });
}

// Función para ver todas las notas
function verNotas() {
  console.clear()

  if (notas.length === 0) {
    console.log('No hay notas para mostrar')
    menu()
    // return
  }

  console.log('Tus notas:');
  for (let i = 0; i < notas.length; i++) {
    //console.log(`${i + 1}. ${notas[i]}`);
    console.log(notas[i].no + " titulo: " + notas[i].titulo)
  }

  menu();
}

// Función para editar una nota
function editarNota() {
  console.clear()
  
  if (notas.length === 0) {
    console.log('No hay notas para editar')
    menu()
  
    return
  }
  
  rl.question('Ingresa el número de la nota que quieres editar: ', (index) => {
    if (index < 1 || index > notas.length) {
      console.log('Número de nota inválido');
      editarNota();
      return;
    }

    //let nota = rl.prompt(notas[index]);

    rl.question('Escribe la nueva versión de la nota: ', (nota) => {

      // Actualizamos la nota en el arreglo
      notas[index - 1] = nota;
      console.log('Nota actualizada correctamente');
      menu();
    });

  });
}

// Función para eliminar una nota
function eliminarNota() {
  console.clear()

  if (notas.length === 0) {
    console.log('No hay notas para eliminar')
    menu()
    return
  }

  rl.question('Ingresa el número de la nota que quieres eliminar: ', (index) => {
    if (index < 1 || index > notas.length) {
      console.log('Número de nota inválido');
      eliminarNota();
      return;
    }

    // Eliminamos la nota del arreglo
    let nuevasNotas = [];
    for (let i = 0; i < notas.length; i++) {
      if (i == index - 1) {
        continue
      }
      nuevasNotas.push(notas[i]);
    }

    notas = nuevasNotas;

    console.log('Nota eliminada correctamente');
    menu();
  });
}

// Función para mostrar el menú y leer la opción del usuario
function menu() {
  console.log('\nMenú:');
  console.log('1. Agregar nota');
  console.log('2. Ver notas');
  console.log('3. Editar nota');
  console.log('4. Eliminar nota');
  console.log('5. Salir');

  rl.question('Elige una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        agregarNota();
        break;
      case '2':
        verNotas();
        break;
      case '3':
        editarNota();
        break;
      case '4':
        eliminarNota();
        break;
      case '5':
        console.log('Adiós!');
        rl.close();
        break;
      default:
        console.log('Opción inválida');
        menu();
        break;
    }
  });
}

// Iniciamos la aplicación mostrando el menú
menu();