import { Component, OnInit } from '@angular/core';
import { IdValue } from './models/id-value';
import { Viaje, ViajeEstado, ViajeTipo } from './models/viaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'viaje-form';

  estados: IdValue[] = [];
  tiposDeViajes: IdValue[] = [];
  viajeEstado = ViajeEstado;
  viajeTipo = ViajeTipo;
  viaje: Viaje;
  viajes: Viaje[] = [];

  constructor(){
    this.estados = this.cargarEstados();
    this.tiposDeViajes = this.cargarTipos();
    this.cargarViajes();
    console.log(this.estados);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.viaje = this.cargarViaje(7);
    }, 5000);
  }

  /*
  * Imprime en consola los datos de un viaje
  */
  guardar(viaje: Viaje): Viaje{
    // console.table(viaje);
    this.viajes.push(viaje);
    return viaje;
  }

  /*
  * Cargar los tipos de viaje en un array de objetos IdValue
  */
  private cargarTipos(): IdValue[]{
    const result: IdValue[] = [];

    result.push({id: this.viajeTipo.Playa, value: 'Playa'});
    result.push({id: this.viajeTipo.Relax, value: 'Relax'});
    result.push({id: this.viajeTipo.Deportivo, value: 'Deportivo'});
    result.push({id: this.viajeTipo.Rural, value: 'Rural'});
    result.push({id: this.viajeTipo.Cultural, value: 'Cultural'});
    result.push({id: this.viajeTipo.Ocio, value: 'Ocio'});

    return result;
  }

  /*
  * Cargar los estados de viaje en un array de objetos IdValue
  */
 private cargarEstados(): IdValue[]{
  const result: IdValue[] = [];

  result.push({id: this.viajeEstado.Abierto, value: 'Abierto'});
  result.push({id: this.viajeEstado.Cerrado, value: 'Cerrado'});
  result.push({id: this.viajeEstado.Cancelado, value: 'Cancelado'});
  result.push({id: this.viajeEstado.Postpuesto, value: 'Postpuesto'});

  return result;
}

 /*
 * Cargar los datos de un viaje por su id
 */
  private cargarViaje(id: number): Viaje{
    const viaje: Viaje = new Viaje({
      tripName: 'Grecia',
      tripType: ViajeTipo.Ocio,
      tripDestination: 'Grecia',
      tripDuration: '10',
      plazas: '10',
      isVisible: true,
      estado: ViajeEstado.Abierto
    });
    return viaje;
  }

  /*
  * Cargar array de viajes
  */
  private cargarViajes(): void{
    for (let i = 0; i < 1; i++){
     this.viajes.push(this.cargarViaje(i));
    }
  }

  /*
  *
  */
 cargarViajeById(value: Viaje): void{
   this.viaje = value;
 }
}
