import {
  Component,
  OnInit
} from '@angular/core';
import {
  Auto
} from 'backend/models/Auto.js';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  AutoService
} from 'src/app/services/autos.service';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';


@Component({
  selector: 'app-editar-autos',
  templateUrl: './editar-autos.component.html',
  styleUrls: ['./editar-autos.component.css']
})
export class EditarAutosComponent implements OnInit {

  //propiedades
  enviado = false;
  editForm: FormGroup;
  autoMarca: any = [
    'Audi', 'BMW', 'Mazda', 'WV', 'Nissan', 'Toyota', 'GMC', 'Ford', 'Kia', 'Ferrari', 'Seat', 'Honda'
  ];
  autoData: Auto[];

  constructor(
    public formbuilder: FormBuilder,
    private router: Router,
    private autoService: AutoService,
    private actRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mainForm();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getAuto(id);
    this.editForm = this.formbuilder.group({
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

  //Construimos el formulario
  mainForm() {
    this.editForm = this.formbuilder.group({
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
  actualizarMarca(d) {
    this.editForm.get('marca').setValue(d, {
      onlySelf: true,
    });
  }

  //getter para acceder al form control
  get myForm() {
    return this.editForm.controls;
  }


  //obtenemos el metodod que se va a modificar por su id
  getAuto(id) {
    this.autoService.getAuto(id).subscribe((data) => {
      this.editForm.setValue({
          modelo: data['modelo'],
          marca: data['marca'],
          color: data['color'],
          descripcion: data['descripcion'],
          cilindraje: data['cilindraje'],
          precio: data['precio'],
          ano: data['ano'],
          imagen: data['imagen'],
      });
    });
  }

  //Metodod que se ejecita cuando el usuario envia el formulario
  onSubmit() {
    this.enviado = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('¿Estas seguro de que deseas modificar')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.autoService.updateAuto(id, this.editForm.value).subscribe({
          complete: () => {
            this.router.navigateByUrl('/listar-autos');
            console.log('Se actualizo correctamente');
          },
          error: (e) => {
            console.log(e);
          },
        });
      }
    }
  }


}
