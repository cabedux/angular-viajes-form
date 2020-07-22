import { Injectable } from '@angular/core';
import { Viaje, ViajeEstado, ViajeTipo } from '../models/viaje';
import { v4 as uuid } from 'uuid';
import { IdValue } from '../models/id-value';

@Injectable({providedIn: 'root'})
export class ViajesService {

  private viajes: Viaje[] = [];

  constructor(){
    this.viajes.push(new Viaje({
      id: uuid(),
      tripName: 'Grecia',
      tripType: ViajeTipo.Cultural,
      tripDestination: 'Grecia',
      tripDuration: '10',
      plazas: '10',
      isVisible: true,
      estado: ViajeEstado.Cancelado,
      fechaDeSalida: '2020-09-18'
    }));
  }

  /*
  * Guardar/actualizar viaje
  */
  guardar(viaje: Viaje): void{
    if (viaje){
      if (viaje.id){
        const idx = this.viajes.findIndex(v => v.id === viaje.id);

        if (idx >= 0){
          this.viajes[idx] = viaje;
        }
      }
      else{
        viaje.id = uuid();
        this.viajes.push(viaje);
      }
    }
  }

  /*
  * Cargar los tipos de viaje en un array de objetos IdValue
  */
  getTiposDeViajes(): IdValue[]{
  const result: IdValue[] = [];

  result.push({id: ViajeTipo.Playa, value: 'Playa'});
  result.push({id: ViajeTipo.Relax, value: 'Relax'});
  result.push({id: ViajeTipo.Deportivo, value: 'Deportivo'});
  result.push({id: ViajeTipo.Rural, value: 'Rural'});
  result.push({id: ViajeTipo.Cultural, value: 'Cultural'});
  result.push({id: ViajeTipo.Ocio, value: 'Ocio'});

  return result;
  }

  /*
  * Cargar los estados de viaje en un array de objetos IdValue
  */
  getEstados(): IdValue[]{
    const result: IdValue[] = [];

    result.push({id: ViajeEstado.Abierto, value: 'Abierto'});
    result.push({id: ViajeEstado.Cerrado, value: 'Cerrado'});
    result.push({id: ViajeEstado.Cancelado, value: 'Cancelado'});
    result.push({id: ViajeEstado.Postpuesto, value: 'Postpuesto'});

    return result;
  }

  /*
  * Obtener la lista de viajes
  */
  getViajesList(): Viaje[] {
    return this.viajes;
  }

  /*
  * Obtener un viaje por id
  */
  getViaje(id: string): Viaje {
    return this.viajes.find(viaje => viaje.id === id);
}

}

