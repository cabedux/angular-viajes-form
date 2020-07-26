import { Pipe, PipeTransform } from '@angular/core';
import { ViajeEstado } from '../models/viaje';

@Pipe({
  name: 'estado'
})
export class EstadoPipe implements PipeTransform {
  transform(value: ViajeEstado): string {
    // con el +value, evitas que compare el tipo de dato en el switch
    switch (+value){
      case ViajeEstado.Abierto:
        return 'Abierto';
      case ViajeEstado.Cerrado:
        return 'Cerrado';
      case ViajeEstado.Cancelado:
        return 'Cancelado';
      case ViajeEstado.Postpuesto:
        return 'Cancelado hasta nuevo aviso';
      default:
        return 'Estado desconocido';
    }
  }

}
