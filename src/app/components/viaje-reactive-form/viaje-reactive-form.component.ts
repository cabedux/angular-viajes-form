import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Viaje, ViajeTipo } from '../../models/viaje';
import { IdValue } from '../../models/id-value';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-viaje-reactive-form',
  templateUrl: './viaje-reactive-form.component.html',
  styleUrls: ['./viaje-reactive-form.component.scss']
})
export class ViajeReactiveFormComponent implements OnInit, OnChanges{
   
  /*
   * Input de un objeto de tipo viaje
   */
  // tslint:disable-next-line:variable-name
   _viaje: Viaje; // Para trabajar con la copia y asi que cambia la ref de memoria
   // La referencia de memoria del input que nos llega es nueva o no se entera angular
   // Los set/get , se generar cuando hay que tratar con los datos.
  @Input() set viaje(value: Viaje) {
    console.log('Este mensaje solo se muestra cuando la ref del input viaje cambia');
    if (value){
      this.elFormulario.patchValue(value);
    }
  }
    // Input de los estados de un viaje
    @Input() estados: IdValue[] = [];

  /*
   * Input de los tipos de viajes
   */
    // tslint:disable-next-line:variable-name
    _tiposDeViajes: IdValue[];  // se hace una copia de los valores que queremos mostrar
    // tslint:disable-next-line:variable-name
    _tiposDeViajesBck: IdValue[]; // almacena una copia de todos los valores de tipos de viaje
    @Input() set tiposDeViajes(value: IdValue[]) {
      if (value) {
        this._tiposDeViajesBck = value;
        this._tiposDeViajes = value;
      }
    }
    // obtener el lisado de los tipos de viaje
    get tiposDeViajes(): IdValue[] {
    return this._tiposDeViajes;
    }

  @Input() disabled = false;

  /*
  * Output para emitir un viaje
  */
  @Output() viajeChanged = new EventEmitter<Viaje>(false);

  elFormulario: FormGroup;

  /*
  * El constructor donde se genera la estructura del formulario
  */
  constructor(private fb: FormBuilder) {
    this.buildFormulario(this.fb);
  }

   // No se suele usar, su fincionalidad se puede implementar con subcribe
   ngOnChanges(changes: SimpleChanges): void{}


  ngOnInit(): void {
    // input del nombre del viaje se suscribe al evento changes
    this.elFormulario.controls.tripName.valueChanges.subscribe(x => {
      this.validarNombreDelViaje(x);
    });

    // input del destino del viaje se suscribe al evento changes
    this.elFormulario.controls.tripDestination.valueChanges.subscribe(x => {
      this.validarNombreDestino(x);
    });
  }

  private validarNombreDestino(x: any): void {
    if (x?.toLowerCase().indexOf('madrid') >= 0) {
      this._tiposDeViajes = this._tiposDeViajesBck.filter(viaje => viaje.id !== ViajeTipo.Playa);
    }
    else {
      this._tiposDeViajes = this._tiposDeViajesBck;
    }
  }

  private validarNombreDelViaje(x: any): void {
    if (x?.toLowerCase().indexOf('madrid') >= 0) {
      this.elFormulario.controls.tripDestination.patchValue('España');
      this.elFormulario.controls.tripType.disable();
    }
    else {
      this.elFormulario.controls.tripType.enable();
    }
  }

  /*
  * Reset formulario con el boton nuevo
  */
  nuevoViaje(): void {
    this.elFormulario.reset();
  }

  /*
  * guarda y resetea el  formulario
  */
  guardar(formValue: Viaje): void {
    if (formValue){
    this.viajeChanged.emit(formValue);
    this.nuevoViaje();
    console.log(formValue);
    }
  }

  /*
  * Construye el formBuilder
  */
  private buildFormulario(fb: FormBuilder): void{
  this.elFormulario =  fb.group({
    id: [''],
    tripName: ['', Validators.required],
    tripType: [''],
    tripDestination: ['', Validators.compose([this.destinoNoValido, Validators.required])],
    tripDuration: [0],
    plazas: [10],
    isVisible: [true],
    estado: ['']
  });
  }

  /*
  * Validador de un campo del formulario
  */
  destinoNoValido(control: FormControl): { [s: string]: boolean } {
  if (control.value?.toLowerCase().indexOf('roma') >= 0) {
  return { destinoNoValido: true };
  }
  }
}
