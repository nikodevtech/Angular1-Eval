import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { AsignaturaComponent } from './asignaturas/asignaturas.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { ContenedorAsignaturasComponent } from './contenedor-asignaturas/contenedor-asignaturas.component';
import { ContenedorPreguntasComponent } from './contenedor-preguntas/contenedor-preguntas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsignaturaComponent,
    PreguntasComponent,
    ContenedorAsignaturasComponent,
    ContenedorPreguntasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
