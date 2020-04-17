import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planche-recto',
  templateUrl: './planche-recto.component.html',
  styleUrls: ['./planche-recto.component.scss']
})
export class PlancheRectoComponent implements OnInit {

  /**
   * Nombre de lignes du tableau d'étiquettes
   */
  lignes = new Array(5);

  /**
  Nombre d'étiquettes par ligne
  */
  colonnes = new Array(2);



  constructor() { }

  ngOnInit() {
  }

}
