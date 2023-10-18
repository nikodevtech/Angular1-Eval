import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Asignatura } from '../asignatura';
import { ASIGNATURAS } from '../mock-asignatura';

@Injectable({
  providedIn: 'root',
})
export class AsignaturasServicio {
  asignaturas: Asignatura[] = [];

  getAsignaturas(): Observable<Asignatura[]> {
    return of(ASIGNATURAS);
  }
}
