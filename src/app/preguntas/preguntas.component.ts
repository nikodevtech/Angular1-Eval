import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../pregunta';
import { PreguntasServicio } from '../servicios/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  preguntas: Pregunta[] = [];

  constructor(private preguntasServicio: PreguntasServicio) { }

  ngOnInit(): void {
    this.getPreguntas();
  }
  getPreguntas(): void {
    this.preguntasServicio.getPreguntas().subscribe((preguntas) => (this.preguntas = preguntas));
  }
}

