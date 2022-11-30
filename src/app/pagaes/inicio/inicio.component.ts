import {
  Component,
  OnInit
} from '@angular/core';
import {
  AutoService
} from 'src/app/services/autos.service';

@Component({
  selector: 'app-listar-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  autos: any = [];

  constructor(private autosService: AutoService) {
    this.getAutos();
  }

  ngOnInit(): void {}

  //Metodo para obtener todos los empleados
  getAutos() {
    this.autosService.getAutos().subscribe((data) => {
      this.autos = data;
    })
  }


  //metodod para borrar un empleado
  eliminarAuto(auto, index) {
    if (window.confirm('¿Estas seguro de que lo quieres eliminar?')) {
      this.autosService.deleteAuto(auto._id).subscribe((data) => {
        this.autos.splice(index, 1);
      })

    }
  }


}
