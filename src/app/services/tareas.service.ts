import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listaTareas';

  getTareas():string[]{//se crea un storage llamado "localStorageKey" (en caso de que no exista ya)
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string)  || [];//localStorage.getItem() permite obtener la informacion del almacenamiento local espesificado
    //mediante este metodo obtenemos como string la informacion, mediante JSON.parce() combertimos la string a un objeto
    //manipulable por javascript
    //en el caso de que haya algo en el local storage lo combertira a un objeto, en caso de que no devolvera un array vacio
  }

  agregarTarea(tarea:string){
    const tareas = this.getTareas();// traemos todas las tareas que se encuentran en el local storage(almacenamiento local)
    tareas.push(tarea);//introducimos la tarea nueva en el array de tareas existente 
    localStorage.setItem(this.localStorageKey,JSON.stringify(tareas));// se setea este nuevo array de tareas mediante localStorage.setItem()
    //este nuevo array se alamacenara en el local storage, cada que seteamos se reemplaza 
  }

  eliminarTarea(index:number){
    const tareas = this.getTareas();
    tareas.splice(index,1);//extrae una (1) tarea ubicada en el indice "index"
    localStorage.setItem(this.localStorageKey,JSON.stringify(tareas));//JSON.stringify se usa para combertir un objeto a JSON
    //localStorage.setItem("almacenamiento que sera seteado","informacion que se le seteara")
  }
  
}
