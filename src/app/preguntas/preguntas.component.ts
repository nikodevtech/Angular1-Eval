import { Component, OnInit } from '@angular/core';
import { Pregunta } from '../pregunta';
import { PreguntasService } from '../servicios/preguntas.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  preguntas: Pregunta[] = [];

  constructor(private preguntasService: PreguntasService) { }

  ngOnInit(): void {
    this.preguntas = this.preguntasService.getPreguntas();
  }
}

