import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from '../servicios/asignaturas.service';
import { Asignatura } from '../asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturaComponent implements OnInit {
  asignaturas: Asignatura[] = [];

  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit(): void {
    this.asignaturas = this.asignaturasService.getAsignaturas();
  }
}
