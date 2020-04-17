import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListeEtiquettesComponent } from './liste-etiquettes/liste-etiquettes.component';
import { NouvelleEtiquetteComponent } from './Nouvelle-Etiquette/nouvelle-etiquette.component';
import { ApercuPlancheEtiquettesComponent } from './apercu-planche-etiquettes/apercu-planche-etiquettes.component';

const routes: Routes = [
  { path: '', redirectTo: 'formulaireEtiquette', pathMatch: 'full' },
  { path: 'formulaireEtiquette', component: NouvelleEtiquetteComponent },
  { path: 'listeEtiquettes/:idNewEtiquette', component: ListeEtiquettesComponent },
  { path: 'listeEtiquettes', component: ListeEtiquettesComponent },
  { path: 'impression', component: ApercuPlancheEtiquettesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
