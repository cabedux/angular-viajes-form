import { Component, OnInit } from '@angular/core';
import { IdValue } from './models/id-value';
import { Viaje} from './models/viaje';
import { ViajesService } from './services/viajes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'viaje-form';

  estados: IdValue[] = [];
  tiposDeViajes: IdValue[] = [];
  viaje: Viaje;
  viajes: Viaje[] = [];

  constructor(private viajesService: ViajesService){ }

  ngOnInit(): void {
    this.tiposDeViajes = this.viajesService.getTiposDeViajes();
    this.estados = this.viajesService.getEstados();
    this.viajes = this.viajesService.getViajesList();
  }

  /*
  * Imprime en consola los datos de un viaje
  */
  guardar(viaje: Viaje): void{
    this.viajesService.guardar(viaje);
    this.viajes = this.viajesService.getViajesList();
  }

  cargarViajeById(id: string): void {
    if (id) {
      this.viaje = this.viajesService.getViaje(id);
    }
  }

}
