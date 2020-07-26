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
  viaje: Viaje;
  viajes: Viaje[] = [];

  constructor(private viajesService: ViajesService, private router: Router) { }

  ngOnInit(): void {
    this.cargarViajes();
  }
 cargarViajeById(id: string): void {
    if (id) {
      this.router.navigate(['/viajes-edit', id]);
      // this.viajesService.getViaje(id).subscribe(viaje => {
      //   this.viaje = viaje;
      // });
    }
  }

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
