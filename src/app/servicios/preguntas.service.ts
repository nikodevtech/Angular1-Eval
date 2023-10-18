import { Injectable } from '@angular/core';
import { Pregunta } from '../pregunta';
import { PREGUNTAS } from '../mock-pregunta';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreguntasServicio {
  preguntas: Pregunta[] = [];

  getPreguntas(): Observable<Pregunta[]> {
    return of(PREGUNTAS);
  }
}
