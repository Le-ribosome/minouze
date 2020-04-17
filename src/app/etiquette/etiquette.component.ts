import { Component, OnInit, Input } from '@angular/core';
import { Etiquette } from '../model/etiquette';
import { EtiquetteService } from '../services/etiquette-service/etiquette.service';

@Component({
  selector: 'app-etiquette',
  templateUrl: './etiquette.component.html',
  styleUrls: ['./etiquette.component.scss']
})
export class EtiquetteComponent implements OnInit {

  /**Si apercu est true alors l'étiquette sera retournée de 
   * 90 deg pour la voir correctement pendant sa construction
   * et on tape dans l'objet etiquette du service etiquette.
   * Autrement, on tape dans toPrint pour construire la planche 
   * d'étiquette non retournée
  */
  @Input()
  apercu: boolean;

  /**Permet d'afficher le recto de l'étiquette */
  @Input()
  recto: boolean;
  /**Permet d'afficher le verso de l'étiquette */
  @Input()
  verso: boolean;

  /**Etiquette */
  etiquette: Etiquette = new Etiquette();

  /**Couleur du liseret, reçu du service à chaque changement du Dto étiquette
   *  et envoyé dans le composant shape-étiquette pour mettre à jour sa couleur */
  couleurLiseret: string;

  constructor(private etiquetteService: EtiquetteService) { }

  ngOnInit() {
    /**Subscribe to changes to have an updated etiquette 
     * si apercu alors on va chercher l'étiquette etiquette dans le 
     * service - sinon on va chercher toPrint dans ce meme service
    */
    if (this.apercu) {
      console.log('subscribe à etiquette en construction');
      this.etiquetteEnConstruction();
    } else {
      this.etiquetteAImprimer();
    }
  }

  /**Subscibe à l'étiquette en construction */
  private etiquetteEnConstruction() {
    this.etiquetteService.changeEtiquette.subscribe(val => {
      this.etiquette = val;
      console.log("Réception d'une nouvelle étiquette dans le composant étiquette: " + JSON.stringify(this.etiquette));
      /** Update de la couleur du texte */
      this.changeTextColor(this.etiquette._couleurLiseret);
    });
  }
  /**Subscibe à l'étiquette à imprimer */
  private etiquetteAImprimer() {
    this.etiquette = this.etiquetteService.toPrint;
  }

  ngAfterViewInit() {
    /**Tourne l'aperçu dans le bon sens */
    if (this.apercu) {
      this.rotation();
    }
  }

  /** Change la couleur du texte */
  changeTextColor(newColor: string) {
    document.getElementById("beerName").style.color = newColor;
    document.getElementById("alc").style.color = newColor;
  }

  /** Tourne les étiquettes recto et verso de 90*/
  rotation() {
    document.getElementById('recto').style.transform = 'rotate(90deg)';
    document.getElementById('verso').style.transform = 'rotate(90deg)';
  }
}
