import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.usuarios = data.data.map((usuario: any) => {
          return {
            correo: usuario.email,
            imagen: usuario.avatar, 
          };
        });
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }
}

