import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Viaje } from '../../models/viaje';
import { IdValue } from '../../models/id-value';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viaje-reactive-form',
  templateUrl: './viaje-reactive-form.component.html',
  styleUrls: ['./viaje-reactive-form.component.scss']
})
export class ViajeReactiveFormComponent implements OnInit, OnChanges{
   // tslint:disable-next-line:variable-name
   _viaje: Viaje;

  @Input() set viaje(value: Viaje) {
    if (value){
      this.elFormulario.patchValue(value);
      console.log('@input() set viaje');
    }
    this._viaje = value;
  }
  @Input() estados: IdValue[] = [];
  @Input() tiposDeViajes: IdValue[] = [];

  @Output() viajeChanged = new EventEmitter<Viaje>(false);

  elFormulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.elFormulario = this.getFormulario(fb);
  }

   ngOnChanges(changes: SimpleChanges): void{
      if (changes.viaje?.currentValue){
        this.elFormulario.patchValue(changes.viaje.currentValue);
        console.log('ngOnChanges');
      }
   }

  ngOnInit(): void {
    // if (this.viaje){
    //   this.elFormulario.patchValue(this.viaje);
    // }

  // carga en los input los valores del obj viaje llegado por el INPUT
  //   this.elFormulario.patchValue({
  //     tripName: this.viaje.tripName,
  //     tripType: this.viaje.tripType,
  //     tripDestination: this.viaje.tripDestination,
  //     tripDuration: this.viaje.tripDuration,
  //     plazas: this.viaje.plazas,
  //     isVisible: this.viaje.isVisible,
  //     estado: this.viaje.estado
  //  });

   // this.elFormulario.controls.tripName.setValue(this.viaje.tripName);
    // console.log(this.viaje);
  }

  guardar(formValue: any): void {
    // this.viajeChanged.emit(this.viaje);
    this.viajeChanged.emit(formValue);
    console.log(formValue);
  }

private getFormulario(fb: FormBuilder): FormGroup{
  return fb.group({
    tripName: ['', Validators.required],
    tripType: [''],
    tripDestination: [''],
    tripDuration: [0],
    plazas: [10],
    isVisible: [true],
    estado: ['']
  });
}
}
