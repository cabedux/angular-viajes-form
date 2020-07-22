import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Viaje } from 'src/app/models/viaje';

@Component({
  selector: 'app-viaje-listado',
  templateUrl: './viaje-listado.component.html',
  styleUrls: ['./viaje-listado.component.scss']
})
export class ViajeListadoComponent implements OnInit {
  viaje: Viaje;
  @Input() viajes: Viaje[] = [];

  @Output() viajeClick = new EventEmitter<string>(false);

  constructor() { }

  ngOnInit(): void {
  }

  setViaje(viaje: Viaje): void {
    this.viajeClick.emit(viaje.id);
  }
}
