import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarAutosComponent } from './pagaes/listar-autos/listar-autos.component';
import { CrearAutosComponent } from './pagaes/crear-autos/crear-autos.component';
import { EditarAutosComponent } from './pagaes/editar-autos/editar-autos.component';
import { AcercaDeComponent } from './pagaes/acerca-de/acerca-de.component';
import { AutoService } from './services/autos.service';
import { InicioComponent } from './pagaes/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarAutosComponent,
    CrearAutosComponent,
    EditarAutosComponent,
    AcercaDeComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
