import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://reqres.in/api/users'; // Reemplaza con la URL real del servicio de autenticación
  private token: string | null = null;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.http.post(`${this.apiUrl}/login`, body).pipe(
      map((response: any) => {
        if (response.token) {
          this.token = response.token;
        }
        return response;
      })
    );
  }

  // Método para agregar el token al encabezado "Authorization"
  setHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
    });
    return headers;
  }

  // Ejemplo de cómo hacer una solicitud con el encabezado "Authorization" agregado
  getUserProfile(): Observable<any> {
    const headers = this.setHeaders();
    return this.http.get(`${this.apiUrl}/user-profile`, { headers });
  }
}
