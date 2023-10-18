import { Component, OnInit } from '@angular/core';
import { AsignaturasServicio } from '../servicios/asignaturas.service';
import { Asignatura } from '../asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css'],
})
export class AsignaturaComponent implements OnInit {
  asignaturas: Asignatura[] = [];

  constructor(private asignaturasServicio: AsignaturasServicio) {}

  ngOnInit(): void {
    this.getAsignaturas();
  }
  getAsignaturas(): void{
    this.asignaturasServicio.getAsignaturas().subscribe((asignaturas) => (this.asignaturas = asignaturas));
  }
}
