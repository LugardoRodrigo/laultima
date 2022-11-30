import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AutoService } from 'src/app/services/autos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-autos',
  templateUrl: './crear-autos.component.html',
  styleUrls: ['./crear-autos.component.css']
})
export class CrearAutosComponent implements OnInit {

  //propiedades
  autoForm: FormGroup;
  enviado = false;
  autoMarca: any = [
    'Audi','BMW','Mazda','WV','Nissan','Toyota','GMC','Ford','Kia','Ferrari','Seat','Honda'
  ];

  constructor(
    public formbuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private autoService: AutoService
  ) {
    this.mainForm();
  }

  ngOnInit(): void {
  }

  //construimos el formulario
  mainForm(){
    this.autoForm = this.formbuilder.group({
      modelo: ['',[Validators.required]],
      marca: ['',[Validators.required]],
      color: ['',[Validators.required ]],
      descripcion: ['',[Validators.required]],
      cilindraje: ['',[Validators.required]],
      precio: ['',[Validators.required]],
      ano: ['',[Validators.required]],
      imagen: ['',[Validators.required]],
    });
  }


  //Seleccionar departamento
  actualizarMarca(d){
    this.autoForm.get('marca').setValue(d, {
      onlySelf: true,
    });
  }

  //getter para acceder al form control
  get myForm(){
    return this.autoForm.controls;
  }

  //metodo que se ejecuta cuando se envia el formulario
  onSubmit(){
    this.enviado = true;
    if(!this.autoForm.valid){
      return false;
    }else{
      return this.autoService.agregarAuto(this.autoForm.value).subscribe({
        complete: () => {
          console.log('Auto agregado correctamente'),
          this.ngZone.run(() => this.router.navigateByUrl('/listar-autos'))
        },
        error: (e) =>{
          console.log(e);
        },
      });
    }
  }

}
