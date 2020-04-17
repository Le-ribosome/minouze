import { Component, OnInit } from '@angular/core';
import { Etiquette } from '../model/etiquette';
import { EtiquetteService } from '../services/etiquette-service/etiquette.service';
import { EncartEnum } from '../model/encart-enum';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-liste-etiquettes',
  templateUrl: './liste-etiquettes.component.html',
  styleUrls: ['./liste-etiquettes.component.scss']
})
export class ListeEtiquettesComponent implements OnInit {

  /** Affichage encart
   * type de l'encart défini par EncartEnum
   * flag isEncart pour l'afficher ou non
   * texte de l'encart
  */
  typeEncart: EncartEnum = EncartEnum.NULL;
  isEncart: boolean;
  texteEncart: string;

  /**
   * Liste d'étiquette enregistrée en base récupérée
   * lors de l'initialisation du composant.
   */
  listeEtiquettes: Etiquette[];

  /** Dans le cas de la création d'une nouvelle étiquette,
   * l'id de cette étiquette suite à la redirection lors de
   * sa création pour mise en surbrillance.
   */
  idNewEtiquette: string = 'null';

  constructor(private etiquetteService: EtiquetteService, private route: ActivatedRoute, private router: Router) {
    this.idNewEtiquette = this.route.snapshot.paramMap.get('idNewEtiquette');
    console.log(this.idNewEtiquette + ' id nouvelle etiquette');
  }


  ngOnInit() {
    this.refreshListe();
  }

  ngAfterViewInit() {
    this.refreshListe();
  }

  /**Initialisation de la liste d'étiquette en faisant un fetchAll dans
   * la base
   */
  private refreshListe() {
    this.listeEtiquettes = this.etiquetteService.getAllEtiquettes();
  }

  apercu(etiquette: Etiquette) {
    console.log("apercu()");
  }

  /**Stocke l'étiquette à imprimer dans le service étiquette pour construire
   * la planche
   */
  impression(etiquette: Etiquette) {
    console.log("impression()");
    this.etiquetteService.toPrint = etiquette;
    console.log('etiquette à imprimer = ' + JSON.stringify(this.etiquetteService.toPrint));
    this.router.navigateByUrl('/impression');
  }

  modification(etiquette: Etiquette) {
    console.log("modification()");
  }

  suppression(etiquette: Etiquette) {
    console.log("suppression() de l'étiquette : " + etiquette._titre);
    let error = false;
    error = this.etiquetteService.removeEtiquette(etiquette._id);
    if (error) {
      this.isEncart = true;
      this.texteEncart = 'Erreur';
      this.typeEncart = EncartEnum.ERROR;
    } else {
      this.isEncart = true;
      this.texteEncart = 'Suppression effectuée';
      this.typeEncart = EncartEnum.SUCCESS;
      this.refreshListe();
    }

    setTimeout(() => this.reinitEncartFactors(), 2000);
  }

  /**Réinitialise les valeurs de l'encart */
  reinitEncartFactors() {
    this.isEncart = false;
    this.texteEncart = "";
    this.typeEncart = EncartEnum.NULL;
  }

  /** Affiche l'image pour la ligne correspondant à l'étiquette nouvellement créée */
  nouvelleEtiquette(etiquette: Etiquette): boolean {
    let result = false;
    if (etiquette._id === this.idNewEtiquette) {
      result = true;
    }
    return result;
  }

}
