import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPreguntasComponent } from './contenedor-preguntas.component';

describe('ContenedorPreguntasComponent', () => {
  let component: ContenedorPreguntasComponent;
  let fixture: ComponentFixture<ContenedorPreguntasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorPreguntasComponent]
    });
    fixture = TestBed.createComponent(ContenedorPreguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
