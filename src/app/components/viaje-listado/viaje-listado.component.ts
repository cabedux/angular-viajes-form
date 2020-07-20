import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';
import { IdValue } from 'src/app/models/id-value';

@Component({
  selector: 'app-viaje-listado',
  templateUrl: './viaje-listado.component.html',
  styleUrls: ['./viaje-listado.component.scss']
})
export class ViajeListadoComponent implements OnInit {
  viaje: Viaje;
  @Input() viajes: Viaje[] = [];
  @Input() estados: IdValue[] = [];
  @Input() tiposDeViajes: IdValue[] = [];

  @Output() viajeClick = new EventEmitter<Viaje>(false);

  constructor() { }

  ngOnInit(): void {
  }

  setViaje(i: number): void {
    // console.table(this.viajes[i]);
    this.viajeClick.emit(this.viajes[i]);
  }
}
