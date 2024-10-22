import { Component } from '@angular/core';
import {EmpleadoListarDTO} from '../../../models/empleado.model';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styles: ``
})
export class EmpleadosComponent {
    public empleados: EmpleadoListarDTO[];

    constructor() {
        this.empleados = [];
    }

}
