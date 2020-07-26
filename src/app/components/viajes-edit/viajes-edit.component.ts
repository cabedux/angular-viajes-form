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

  constructor(private viajesService: ViajesService, private router: Router, aRouter: ActivatedRoute) {
    aRouter.params.subscribe(params => {
      this.viajeId = params?.id || null;
    });
  }

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
  * Imprime en consola los datos de un viaje
  */
 guardar(viaje: Viaje): void{
   this.viajesService.guardar2(viaje).subscribe(x => {    if (x){
     this.viaje = x;
     this.router.navigate(['/viajes']);
    }
  });
 }
}
