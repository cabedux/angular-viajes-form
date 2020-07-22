import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ViajeNgformComponent } from './components/viaje-ngform/viaje-ngform.component';
import { ViajeReactiveFormComponent } from './components/viaje-reactive-form/viaje-reactive-form.component';
import { ViajeListadoComponent } from './components/viaje-listado/viaje-listado.component';
import { ViajesService } from './services/viajes.service';
import { EstadoPipe } from './pipes/estado.pipe';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TipoPipe } from './pipes/tipo.pipe';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    ViajeNgformComponent,
    ViajeReactiveFormComponent,
    ViajeListadoComponent,
    EstadoPipe,
    TipoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ViajesService,
    {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
