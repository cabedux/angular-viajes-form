export enum ViajeEstado{
    Abierto = 1,
    Cerrado = 2,
    Cancelado = 3,
    Postpuesto = 4
}

export enum ViajeTipo{
    Playa = 1,
    Relax = 2,
    Deportivo = 3,
    Rural = 4,
    Cultural = 5,
    Ocio = 6
}

export class Viaje{
    id?: number;
    tripName: string;
    tripType: ViajeTipo;
    tripDestination: string;
    tripDuration: number;
    plazas?: number;
    isVisible: boolean;
    estado: ViajeEstado;

    constructor(item?: any){
        this.tripName = item?.tripName || '';
        this.tripType = item?.tripType || ViajeTipo.Relax;
        this.tripDestination = item?.tripDestination || '';
        this.tripDuration = item?.tripDuration || 0;
        this.plazas = item?.plazas || 0;
        this.isVisible = item && item.isVisible != null ? item.isVisible : true;
        this.estado = item?.estado || ViajeEstado.Abierto;
    }
}
