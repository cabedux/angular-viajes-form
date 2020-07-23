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
    this.viajesService.getTiposDeViajes().subscribe(x => {
      if (x){
        this.tiposDeViajes = x;
      }
    });
    this.viajesService.getEstados().subscribe(x => {
      if (x){
        this.estados = x;
      }
    });
    this.cargarViajes();
  }



  /*
  * Imprime en consola los datos de un viaje
  */
  guardar(viaje: Viaje): void{
    this.viajesService.guardar2(viaje).subscribe(x => {
      if (x){
        this.viaje = x;
        this.cargarViajes();
      }

    });
  }

  cargarViajeById(id: string): void {
    if (id) {
      this.viajesService.getViaje(id).subscribe(viaje => {
        this.viaje = viaje;
      });
    }
  }

  deleteViaje(id: string): void{
    if (id) {
      this.viajesService.deleteViaje(id).subscribe(viaje => {
        if (viaje){
          alert('Viaje eliminado');
        }
        else{
          alert('No se ha podido eliminar el viaje');
        }
      });
    }
  }

  private cargarViajes(): void {
    this.viajesService.getViajesList().subscribe(viajes => {
      this.viajes = viajes;
    });
  }
}
