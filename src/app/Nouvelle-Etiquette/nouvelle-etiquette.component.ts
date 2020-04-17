import { Component, OnInit } from '@angular/core';
import { Etiquette } from '../model/etiquette';
import { EtiquetteService } from '../services/etiquette-service/etiquette.service';

@Component({
  selector: 'app-nouvelle-etiquette',
  templateUrl: './nouvelle-etiquette.component.html',
  styleUrls: ['./nouvelle-etiquette.component.scss']
})
export class NouvelleEtiquetteComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
