import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { EgresoComponent } from './egreso/egreso.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    EgresoComponent,
    IngresoComponent,
    FormularioComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [IngresoServicio, EgresoServicio],
  bootstrap: [AppComponent],
})
export class AppModule {}