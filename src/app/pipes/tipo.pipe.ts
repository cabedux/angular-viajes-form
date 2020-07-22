import { Pipe, PipeTransform } from '@angular/core';
import { ViajeTipo } from '../models/viaje';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: ViajeTipo): string {
    // con el +value, evitas que compare el tipo
    switch (+value){
      case ViajeTipo.Playa:
        return 'Playa todo incluido' ;
      case ViajeTipo.Relax:
        return 'Relax';
      case ViajeTipo.Deportivo:
        return 'Deportivo';
      case ViajeTipo.Rural:
        return 'Rural';
      case ViajeTipo.Cultural:
        return 'Cultural';
      case ViajeTipo.Ocio:
        return 'Ocio';
      default:
        return 'Sin estado';
    }
  }

}
