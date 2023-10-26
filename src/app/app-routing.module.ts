import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './feature/login/login.component';
import { UsuariosComponent } from './feature/usuarios/usuarios.component';
import { CrearComponent } from './feature/crear/crear.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para el formulario de inicio de sesión
  { path: 'usuarios', component: UsuariosComponent }, // Ruta para listar usuarios
  { path: 'crear', component: CrearComponent }, // Ruta para el formulario de creación de usuarios
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redireccionar a /login en la raíz por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
