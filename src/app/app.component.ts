import { Component, OnInit } from '@angular/core';
import { IdValue } from './models/id-value';
import { Viaje} from './models/viaje';
import { ViajesService } from './services/viajes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'viaje-form';

  constructor(){}

  ngOnInit(): void {}

}
