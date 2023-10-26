import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isSubmitting: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, complete ambos campos.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = ''; // Limpiar mensajes de error anteriores.

    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Guardar el token en una cookie segura o en otro lugar seguro.
        //  this.authService.setToken(response.token);

        // Redirigir al usuario a la página deseada después del inicio de sesión.
        this.router.navigate(['/usuarios']); // Ajusta la ruta según tus necesidades.

        this.isSubmitting = false;
      },
      (error) => {
        this.errorMessage = 'Error al iniciar sesión. Por favor, verifique sus credenciales.';
        console.error('Error al iniciar sesión:', error);
        this.isSubmitting = false;
      }
    );
  }
}
