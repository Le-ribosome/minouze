import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { EtiquetteService } from 'src/app/services/etiquette-service/etiquette.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-shape-etiquette',
  templateUrl: './shape-etiquette.component.html',
  styleUrls: ['./shape-etiquette.component.scss']
})
export class ShapeEtiquetteComponent implements OnInit {

  /**Array contenant les ids des paths du svg pour 
   * changement de couleur
   */
  paths: string[] = [".svg_15", ".svg_16", ".svg_17", ".svg_18", ".svg_21", ".svg_22"];

  /** Couleur du liseret reçu du composant étiquette */
  couleurLiseret: string;

  constructor(private etiquetteService: EtiquetteService) { }

  ngOnInit() {
    /**Subscribe to changes to have an updated etiquette */
    this.etiquetteService.changeEtiquette.subscribe(val => {
      this.couleurLiseret = val.couleurLiseret;
      console.log('réception nouvelle couleur' + this.couleurLiseret);
      /** On applique la nouvelle couleur au svg */
      this.newColortoPath(this.couleurLiseret);
    });
  }

  /**jQuery pour appliquer une nouvelle couleur aux paths
   * du svg
   * 
   * @param newColor la nouvelle couleur au format #hex
   * 
   * TODO: attention le form permet d'envoyer une couleur rgba ca va péter si on en reçoit
   */
  newColortoPath(newColor: string) {
    /** On parcours la liste des paths pour leur appliquer
     *  la nouvelle couleur */
    for (let i = 0; i < this.paths.length; i++) {
      console.log('On aplique la couleur ' + this.couleurLiseret + ' au path numero ' + i);
      $(this.paths[i]).attr('stroke', newColor);
    }
  }

}
