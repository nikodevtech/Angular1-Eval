import { Injectable } from '@angular/core';
import { Asignatura } from '../asignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {
  private asignaturas: Asignatura[] = [
    { nombre: 'Desarrollo Web en entorno cliente', siglas: 'DWC', profesor: 'D. Jose María Polavieja' },
    { nombre: 'Despliegue de aplicaciones web', siglas: 'DAW', profesor: 'D. Jose María Carazo' },
    { nombre: 'Desarrollo web en entorno servidor', siglas: 'DWS', profesor: 'D. Regino Fdez' },
    { nombre: 'Diseñor de interfaces web', siglas: 'DIW', profesor: 'D. Regino Fdez' },

  ];

  getAsignaturas(): Asignatura[] {
    return this.asignaturas;
  }
}
