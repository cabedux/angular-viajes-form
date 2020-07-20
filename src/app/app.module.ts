import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ViajeNgformComponent } from './components/viaje-ngform/viaje-ngform.component';
import { ViajeReactiveFormComponent } from './components/viaje-reactive-form/viaje-reactive-form.component';
import { ViajeListadoComponent } from './components/viaje-listado/viaje-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    ViajeNgformComponent,
    ViajeReactiveFormComponent,
    ViajeListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
