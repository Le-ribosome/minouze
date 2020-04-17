import { Component, OnInit, Input } from '@angular/core';
import { EncartEnum } from '../model/encart-enum';

@Component({
  selector: 'app-encart',
  templateUrl: './encart.component.html',
  styleUrls: ['./encart.component.scss']
})
export class EncartComponent implements OnInit {

  /**
   * Enum déterminant nature encart à afficher
   */
  @Input()
  typeEncart: EncartEnum;
  /**
 * Texte de l'encart
 */
  @Input()
  texteEncart: string;

  constructor() { }

  ngOnInit() {
  }

}