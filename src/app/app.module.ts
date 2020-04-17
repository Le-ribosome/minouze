import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireEtiquetteComponent } from './formulaire-etiquette/formulaire-etiquette.component';
import { ShapeEtiquetteComponent } from './etiquette/shape-etiquette/shape-etiquette.component';
import { EtiquetteComponent } from './etiquette/etiquette.component';
import { ApercuPlancheEtiquettesComponent } from './apercu-planche-etiquettes/apercu-planche-etiquettes.component';
import { PlancheRectoComponent } from './apercu-planche-etiquettes/planche-recto/planche-recto.component';
import { PlancheVersoComponent } from './apercu-planche-etiquettes/planche-verso/planche-verso.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListeEtiquettesComponent } from './liste-etiquettes/liste-etiquettes.component';
import { NouvelleEtiquetteComponent } from './Nouvelle-Etiquette/nouvelle-etiquette.component';
import { EncartComponent } from './encart/encart.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireEtiquetteComponent,
    ShapeEtiquetteComponent,
    EtiquetteComponent,
    ApercuPlancheEtiquettesComponent,
    PlancheRectoComponent,
    PlancheVersoComponent,
    NavbarComponent,
    ListeEtiquettesComponent,
    NouvelleEtiquetteComponent,
    EncartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
