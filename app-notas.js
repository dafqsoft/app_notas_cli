const prompt = require('prompt-sync')();
let notas_listado = [];

function escribir(){
    console.log("Escriba una nota nueva");
    let cantidadDeNotas=0;
    cantidadDeNotas=notas_listado.length;
    console.log("Escriba aqui su nota");
    var nota="";
    while (true){
        nota=prompt();
        if(nota.length!=0 && nota.length<=60){
            notas_listado.push(nota);
            // if(cantidadDeNotas==notas_listado.length){
            //     console.log("Error, no pudo guardarse su nota");
            // }
            console.log("Nota guardada correctamente");
            break;
        }
        console.log("Su nota era demasiado larga", nota.length);
        console.log("Escriba aqui su nota");
    }
    return true;
}

function listar(){
    if(notas_listado.length==0){
        console.log("Estaba vacio... No hay notas que mostrar");
        return false
    }
    for(let i=0; i<notas_listado.length; i++){
        console.log("Nota n.", (i+1), ";", notas_listado[i]);
    }
    return true;
}

function mostrar(indice){
    // console.log("Escriba el indice de la nota a mostrar deseada");
    // let nota=parseInt(prompt());
    console.log("Nota n.", indice, ":", notas_listado[(indice-1)]);
    return true;
}

function editar(indice){
    // console.log("Escriba el indice de la nota a editar");
    // let nota=parseInt(prompt());
    let notaAEditar=notas_listado[(indice-1)];
    let notaEditada=prompt(notas_listado[(indice-1)]);
    notas_listado[(indice-1)]=notaAEditar+notaEditada;
    return true;
}

function borrar(indice){
    // console.log("Escriba el indice de la nota a borrar")
    let numeroNotasOriginales=notas_listado.length;

    let i = 0;
    while (i < notas_listado.length) {
        if (i === (indice-1)) {
            console.log("Indice encontrado");
            for(let n_i=indice; n_i < notas_listado.length; n_i++){
                notas_listado[(n_i-1)]=notas_listado[n_i];
            }
            notas_listado.pop();
            break;
        }
        i++;
    }  

    if(numeroNotasOriginales>notas_listado.length){
        console.log("La nota se borro satisfactoriamente");
        return true
    }     
    return false
}

function menu(opcion){
    if(opcion>4){
        return false;
    }

    if(opcion==1){
        return escribir();
    }

    if(opcion==3){
        console.log("Desea listar(1) o consultar una nota(cualquier otro numero)")
        let consulta=parseInt(prompt());
        if(consulta==1 && opcion==3){
            console.log("El listado total de notas es: ");
            return listar();
        }
    }

    console.log("Este es el listado de notas actuales:")
    listar();
    console.log("Elija nota para visualizar, editar o borrar");
    indice_nota=parseInt(prompt());
    switch(opcion){
        case 2:
            return editar(indice_nota);
        case 3:
            return mostrar(indice_nota);
        case 4:
            return borrar(indice_nota);
        default:
            return false;
    }
    
}

function main(){
    while(true){
        console.log("Bienvenido a la aplicacion de notas CLI frugales");
        console.log("Tiene 5 opciones\n1. Crear Nota\n2. Editar nota\n3. Listar una o varias notas\n4. Borrar una nota\n5. Salir de la aplicacion")
    
        let opcion=parseInt(prompt());

        if(opcion===5){
            console.log("Se borraran las notas: 1. Si. 2. No.");
            let borrar=parseInt(prompt())
            if(borrar==1){
                notas_listado=[];
                console.log("Hasta otra!");
                break;
            }
            console.log("No se preocupe, sus notas siguen aqui");
            listar();
            continue;
        }

        resultado=menu(opcion);

        if(!resultado){
            console.log("Opcion no realizable");
        }else{
            console.log("Operacion realizada con exito");
        }
    
    }
}

main();