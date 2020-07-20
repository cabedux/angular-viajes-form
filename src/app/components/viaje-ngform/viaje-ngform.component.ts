import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Viaje } from '../../models/viaje';
import { IdValue } from '../../models/id-value';

@Component({
  selector: 'app-viaje-ngform',
  templateUrl: './viaje-ngform.component.html',
  styleUrls: ['./viaje-ngform.component.scss']
})
export class ViajeNgformComponent implements OnInit {

  // tslint:disable-next-line:variable-name
  private _viaje: Viaje = new Viaje();

  @Input() set viaje(value: Viaje) {
    if (value){
      this._viaje = value;
    }
  }

  get viaje(): Viaje {
    return this._viaje;
  }

  @Input() estados: IdValue[] = [];
  @Input() tiposDeViajes: IdValue[] = [];

  @Output() viajeChanged = new EventEmitter<Viaje>(false);

  // readonly viajeEstado = ViajeEstado;
  // readonly viajeValue = Object.values(ViajeEstado).filter(value => typeof value === 'number')

  constructor() {
  }

  ngOnInit(): void {
  }

  guardar(form: any): void {
    this.viaje = form;
    this.viajeChanged.emit(this.viaje);
  }

}
