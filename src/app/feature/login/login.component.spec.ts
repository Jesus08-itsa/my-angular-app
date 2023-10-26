import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit login form', () => {
    const loginData = {
      username: 'tu-usuario',
      password: 'tu-contraseña',
    };

    component.username = loginData.username;
    component.password = loginData.password;

    component.login();

    // Verifica si la propiedad isSubmitting se actualiza durante el inicio de sesion
    expect(component.isSubmitting).toBe(true);

    // Simulación de un retraso 
    setTimeout(() => {
      // Verifica si la propiedad isSubmitting se restablece despues del inicio de sesion
      expect(component.isSubmitting).toBe(false);
    }, 2000); // Simulación de un inicio de sesion exitoso despues de 2 segundos
  });
});

