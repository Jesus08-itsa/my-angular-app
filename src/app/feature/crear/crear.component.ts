import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../../shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'],
})
export class CrearComponent {
  nuevoUsuario = { name: '', job: '' };
  apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  crearUsuario() {
    this.http
      .post(this.apiUrl, this.nuevoUsuario)
      .subscribe(
        (respuesta) => {
          console.log('Usuario creado con éxito:', respuesta);
          this.mostrarMensajeExito();
        },
        (error) => {
          console.error('Error al crear usuario:', error);
        }
      );
  }

  mostrarMensajeExito() {
    this.dialog.open(SuccessDialogComponent, {
      width: '250px',
      data: { mensaje: 'Usuario creado con éxito' },
    });
  }
}



