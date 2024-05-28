import { Component, Input } from '@angular/core';
import { ITarea } from '../../../shared/interfaces/itarea';
@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  //@Input() tareaAtr: ITarea = {resumen:'' ,detalle:''} as ITarea;
  @Input() tareaAtr: ITarea = {} as ITarea; // Le decimos a la amquina que no saque error que luego llenaremos los datos

  completado: boolean = false;

  btnCompletar() {
    if (this.completado == false) {
      alert("true");
      this.completado = true;
      // CAMBIE PARA QUE SALGA O NO SALGA EL BOTON COMPLETADO
    }
    else {
      alert("false");
      this.completado = false;
    }
  }
}


