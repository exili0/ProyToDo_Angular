import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiListadoComponent } from './views/mi-listado/mi-listado.component';
import { MiMenuComponent } from './mi-menu/mi-menu.component';
import { AgregarComponent } from './agregar/agregar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MiListadoComponent, MiMenuComponent, AgregarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyToDo';
}
