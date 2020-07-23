import { Injectable } from '@angular/core';
import { Viaje, ViajeEstado, ViajeTipo } from '../models/viaje';
import { v4 as uuid } from 'uuid';
import { IdValue } from '../models/id-value';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ViajesService {

  private viajes: Viaje[] = [];

  constructor( private http: HttpClient){
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

  guardar2(v: Viaje): Observable<Viaje> {
    const urlPost = 'http://localhost:8080/viajes';
    const urlPut = `http://localhost:8080/viajes/${v.id}`;
    if (v.id) {
        return this.http.put<any>(urlPut, v).pipe(
            map((x: any) => {
                return new Viaje(x);
            }),
            catchError(() => {
                alert('No se ha podido modificar el viaje');
                return of(null);
            }));
    } else {
        return this.http.post<any>(urlPost, v).pipe(
            map((x: any) => {
                return new Viaje(x);
            }),
            catchError(() => {
                alert('No se ha podido añadir el viaje');
                return of(null);
            }));
    }
}

  /*
  * Cargar los tipos de viaje en un array de objetos IdValue
  */
  // getTiposDeViajes(): IdValue[]{
  // const result: IdValue[] = [];

  // result.push({id: ViajeTipo.Playa, value: 'Playa'});
  // result.push({id: ViajeTipo.Relax, value: 'Relax'});
  // result.push({id: ViajeTipo.Deportivo, value: 'Deportivo'});
  // result.push({id: ViajeTipo.Rural, value: 'Rural'});
  // result.push({id: ViajeTipo.Cultural, value: 'Cultural'});
  // result.push({id: ViajeTipo.Ocio, value: 'Ocio'});

  // return result;
  // }
  getTiposDeViajes(): Observable<IdValue[]>{
    const url = `/assets/mocks/tipos.json`;

    return this.http.get<IdValue[]>(url).pipe(map(x => {
        return x.map(item => ({id: item.id, value: item.value}));
      })
    );
  }
  /*
  * Cargar los estados de viaje en un array de objetos IdValue
  */
  // getEstados(): IdValue[]{
  //   const result: IdValue[] = [];

  //   result.push({id: ViajeEstado.Abierto, value: 'Abierto'});
  //   result.push({id: ViajeEstado.Cerrado, value: 'Cerrado'});
  //   result.push({id: ViajeEstado.Cancelado, value: 'Cancelado'});
  //   result.push({id: ViajeEstado.Postpuesto, value: 'Postpuesto'});

  //   return result;
  // }
  getEstados(): Observable<IdValue[]>{
    const url = `/assets/mocks/estados.json`;

    return this.http.get<IdValue[]>(url).pipe(
      map(x => {
        return x.map(item => ({id: item.id, value: item.value}));
      })
    );

  }

  /*
  * Obtener la lista de viajes
  */
  getViajesList(): Observable<Viaje[]>{
      const url = `/assets/mocks/viajes.json`;
      // const url = `http://localhost:8080/viajes/${id}`;
      return this.http.get<any>(url).pipe(
        map((data: any[]) => {
          return data.map(c => new Viaje(c));
        }));
  }

  /*
  * Obtener un viaje por id, funcion asincrona con pipe(tuberia)
  */
 getViaje(id: string): Observable<Viaje> {
    const url = `/assets/mocks/viaje-${id}.json`;
    // const url = `http://localhost:8080/viajes/${id}`;

    // Cabecera con el token
    const headers: HttpHeaders = new HttpHeaders({
      Authetication: 'Bearer AsvaIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk'
    });

    return this.http.get<any>(url, { headers }).pipe(
      map((data: any) => {
        return new Viaje(data);
      }),
      catchError((e) => {
        console.error(e);
        console.error('Ha ocurrido un error');
        return of(null);
      }));
  }

  // vas a obtener como resultado una tuberia en la que en cualquier momento
  // te puede llegar un observable
  getViaje2(id: string): Observable<Viaje> {
    const url = `http://localhost:8080/viajes/${id}`;
    let newViaje: Viaje;

    // el metodo pipe encadena operadores que realizan transformaciones
    // configuro una peticion http y aplico transformaciones
    return this.http.get<any>(url).pipe(
      map((data: any) => {
        const viaje = new Viaje(data);
        viaje.tripName = 'Cambiado';
        return viaje;
      }),
      map((dataViaje: Viaje) => {
        dataViaje.estado = ViajeEstado.Abierto;
        newViaje = dataViaje;
        return dataViaje;
      })
      );

      // este viaje sera siempre undefined porque se devolvera antes que se resuelva el get
      // return newViaje;
  }


  deleteViaje(id: string): Observable<Viaje>{
    const url = `/assets/mocks/viaje-${id}.json`;
    // const url = `http://localhost:8080/viajes/${id}`;
    return this.http.delete<any>(url).pipe(
     catchError((e) => {
       console.error(e);
       console.error('Ha ocurrido un error');
       return of(false);
     })
      );
  }
}

