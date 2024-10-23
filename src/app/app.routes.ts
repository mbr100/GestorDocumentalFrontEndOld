import { Routes } from '@angular/router';
import { RolesComponent } from './pages/mantenimientos/roles/roles.component';
import {EmpleadosComponent} from './pages/mantenimientos/empleados/empleados.component';

export const routes: Routes = [
    { path: 'mantenimientos/roles', component: RolesComponent },
    { path: 'mantenimientos/empleados', component: EmpleadosComponent }
];
