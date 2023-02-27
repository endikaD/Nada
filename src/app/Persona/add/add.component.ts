import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Modelo/Persona.module'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void {

  }

  Guardar(persona:Persona){
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Añadido correctamente");
      this.router.navigate(["listar"]);
    })
  }
}
