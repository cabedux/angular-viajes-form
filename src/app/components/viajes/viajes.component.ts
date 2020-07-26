import { Component, OnInit } from '@angular/core';
import { ViajesService } from 'src/app/services/viajes.service';
import { Viaje } from 'src/app/models/viaje';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.scss']
})
export class ViajesComponent implements OnInit {

  loading = false;
  viajes: Viaje[] = [];

  constructor(private viajesService: ViajesService, private router: Router) { }

  ngOnInit(): void {
    this.cargarViajes();
  }

  /*
  * Redigir a la pagina de edicion de un viaje pasando una id como parametro
  */
  cargarViajeById(id: string): void {
    if (id) {
      this.router.navigate(['/viajes-edit', id]);
    }
  }

  /*
  * Eliminar un viaje llamando al sercicio correspondiente
  * y se comprueba si ha podido ser eliminado o no
  */
  deleteViaje(id: string): void{
    if (id) {
      this.viajesService.deleteViaje(id).subscribe(viaje => {
        if (viaje){
          alert('Viaje eliminado');
          this.cargarViajes();
        }
        else{
          alert('No se ha podido eliminar el viaje');
        }
      });
    }
  }

  /*
  * Carga el listado de viajes llamando al sercicio correspondiente
  * Loading: para mostrar/ocultar el icono de loading
  */
  private cargarViajes(): void {
    this.loading = true;
    this.viajesService.getViajesList().subscribe(viaje => {
      if (viaje) {
        this.viajes = viaje;
      }
      this.loading = false;
    });
  }
}
