import { Component } from '@angular/core';
import { TareaComponent } from './tarea/tarea.component';
import { ITarea } from '../../shared/interfaces/itarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mi-listado',
  standalone: true,
  imports: [TareaComponent, FormsModule],
  templateUrl: './mi-listado.component.html',
  styleUrl: './mi-listado.component.css'
})
////////////////////////////////////////////////////////////////////////////////////////////////
export class MiListadoComponent {

  public listadoTareas: ITarea[]; // nos pide inicializarlo, aquí o en 

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

  textoResumen: string = '';
  textoDetalle: string = '';

  guardarResumen() {
    console.log(this.textoResumen);
  }
  guardarDetalle() {
    console.log(this.textoDetalle);
  }

  guardarObjeto() {
    console.log(this.textoResumen, this.textoDetalle);
  }

  crearTarea() {
    // Creamos nueva tarea y la forzamos a acoplarse al array
    const nuevaTarea: ITarea = {
      resumen: this.textoResumen,
      detalle: this.textoDetalle
    };

    this.listadoTareas.push(nuevaTarea);

    // Borramos el contenido de las celdas
    this.textoResumen = '';
    this.textoDetalle = '';
  }

}