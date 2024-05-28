import { Component } from '@angular/core';
import { TareaComponent } from './tarea/tarea.component';
import { ITarea } from '../../shared/interfaces/itarea';

@Component({
  selector: 'app-mi-listado',
  standalone: true,
  imports: [TareaComponent],
  templateUrl: './mi-listado.component.html',
  styleUrl: './mi-listado.component.css'
})
////////////////////////////////////////////////////////////////////////////////////////////////
export class MiListadoComponent {
  public listadoTareas: ITarea[]; // nos pide inicializarlo, aquí o en constructor
  constructor() {                 // ojo, en minúsculas!
    this.listadoTareas = [
      {
        resumen: 'Estudiar',
        detalle: 'Un rato de repaso y revisar tareas'
      },
      {
        resumen: 'Salir',
        detalle: 'que también hay que descansar'
      }
    ]
  }
  public mostrar(esteResumen: String): void {
    alert(`   Seleccionada: ${esteResumen}`);
    //alert("Seleccionada:" + esteResumen);
  }
}