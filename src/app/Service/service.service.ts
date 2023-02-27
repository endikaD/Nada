import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../Modelo/Persona.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://localhost:8080/usuario/usuarios';
  Url2 = 'http://localhost:8080/usuario';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url)
  }
  createPersona(persona:Persona){
    return this.http.post<Persona[]>(this.Url2, persona);
  }
}
