import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './pagaes/acerca-de/acerca-de.component' ;
import { CrearAutosComponent } from './pagaes/crear-autos/crear-autos.component' ;
import { EditarAutosComponent } from './pagaes/editar-autos/editar-autos.component' ;
import { ListarAutosComponent } from './pagaes/listar-autos/listar-autos.component' ;
import { InicioComponent } from './pagaes/inicio/inicio.component';
const routes: Routes = [


  { path: '', pathMatch: 'full', redirectTo: 'inicio'},

  { path: 'crear-autos',component:CrearAutosComponent },
  { path: 'editar-autos/:id',component:EditarAutosComponent},
  { path: 'listar-autos',component:ListarAutosComponent},
  { path: 'acerca',component:AcercaDeComponent },
  { path: 'inicio',component:InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
