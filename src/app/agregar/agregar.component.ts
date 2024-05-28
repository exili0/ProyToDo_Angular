import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {

  textoResumen: string = '';
  textoDetalle: string = '';

  guardarResumen() {
    console.log(this.textoResumen);
  }
  guardarDetalle() {
    console.log(this.textoDetalle);
  }

  crearTarea(listadoTareas: string[]) {

    listadoTareas.push(this.textoResumen, this.textoDetalle);




  }
}
