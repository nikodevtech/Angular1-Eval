import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorAsignaturasComponent } from './contenedor-asignaturas.component';

describe('ContenedorAsignaturasComponent', () => {
  let component: ContenedorAsignaturasComponent;
  let fixture: ComponentFixture<ContenedorAsignaturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorAsignaturasComponent]
    });
    fixture = TestBed.createComponent(ContenedorAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
