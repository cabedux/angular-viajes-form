import { Component, OnInit } from '@angular/core';
import { ViajesService } from 'src/app/services/viajes.service';
import { Viaje } from 'src/app/models/viaje';
import { IdValue } from 'src/app/models/id-value';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viajes-edit',
  templateUrl: './viajes-edit.component.html',
  styleUrls: ['./viajes-edit.component.scss']
})
export class ViajesEditComponent implements OnInit {
  viaje: Viaje;
  estados: IdValue[] = [];
  tiposDeViajes: IdValue[] = [];
  viajeId: any;

  /*
  * Recoge la id de los parametros de la url
  */
  constructor(private viajesService: ViajesService, private router: Router, aRouter: ActivatedRoute) {
    aRouter.params.subscribe(params => {
      this.viajeId = params?.id || null;
    });
  }
  /*
  * Carga los tipos de viajes llamando al servicio correspondiente
  * Carga los estados de viajes llamando al servicio correspondiente
  * Si llegada ID ->Carga los datos de un viaje llamando al servicio correspondiente
  * Sino --> Crea un viaje vacio
  */
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

    if (this.viajeId !== null) {
      this.viajesService.getViaje(this.viajeId).subscribe(x => {
        if (x) {
          this.viaje = x;
        }
      });
    } else {
      this.viaje = new Viaje();
    }
  }

  /*
  * Llama al servicio para guardar los datos de un viaje y vuelve al listado
  */
 guardar(viaje: Viaje): void{
   this.viajesService.guardar2(viaje).subscribe(x => {
     if (x){
      this.viaje = x;
      this.router.navigate(['/viajes']);
    }
  });
 }
}
