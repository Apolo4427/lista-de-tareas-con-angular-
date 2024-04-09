import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'lista_tareas_App';

  listaTareas:string[] = [];
  nuevaTarea:string ='';

  private _tareasService = inject(TareasService);//injectamos el servicio de TareasService que emos creado

  ngOnInit(): void {
      this.listaTareas = this._tareasService.getTareas();
  }

  agregarTarea(){
    this._tareasService.agregarTarea(this.nuevaTarea);//agregamos una nueva tarea mediante el metodo del service (agregarTarea())
    this.nuevaTarea = '';//limpiamos el campo de tarea
    this.listaTareas = this._tareasService.getTareas();// seteamos el nuego array de tareas mediante el metodo del servicio (getTareas())
  }

  eliminarTarea(index:number){
    this._tareasService.eliminarTarea(index);
    this.listaTareas = this._tareasService.getTareas();
  }

}
