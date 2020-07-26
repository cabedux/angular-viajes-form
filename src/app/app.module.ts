import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ViajeNgformComponent } from './components/viajes-edit/viaje-ngform/viaje-ngform.component';
import { ViajeReactiveFormComponent } from './components/viajes-edit/viaje-reactive-form/viaje-reactive-form.component';
import { ViajeListadoComponent } from './components/viajes/viaje-listado/viaje-listado.component';
import { ViajesService } from './services/viajes.service';
import { EstadoPipe } from './pipes/estado.pipe';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { TipoPipe } from './pipes/tipo.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ViajesComponent } from './components/viajes/viajes.component';
import { ViajesEditComponent } from './components/viajes-edit/viajes-edit.component';
import { AppRoutingModule } from './app-routing-module';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';

registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    ViajeNgformComponent,
    ViajeReactiveFormComponent,
    ViajeListadoComponent,
    EstadoPipe,
    TipoPipe,
    ViajesComponent,
    ViajesEditComponent,
    HeaderComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ViajesService,
    {provide: LOCALE_ID, useValue: 'es'}],

  bootstrap: [AppComponent]
})
export class AppModule { }
