import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-apercu-planche-etiquettes',
  templateUrl: './apercu-planche-etiquettes.component.html',
  styleUrls: ['./apercu-planche-etiquettes.component.scss']
})
export class ApercuPlancheEtiquettesComponent implements OnInit {

  /**Contenu de la page à stocker pour le cas 
   * du retour arrière lors d'un print
   */
  originalContents: any;

  @HostListener('window:afterprint')
  onafterprint() {
    console.log('CANCELPRINT');
    //TODO: FIX DE LA FOIREUSERIE DU IMPRIMER QUI IMPRIME PAS
    document.body.innerHTML = this.originalContents;
  }

  constructor() { }

  ngOnInit() {
    //this.impression();
  }

  // /**Bidouille pour cacher la planche mais l'avoir quand 
  //  * même à l'impression
  //  */
  // ngAfterViewInit() {
  //   console.log('impression w = ' + $('#impression').width());
  //   console.log('impression h= ' + $('#impression').height());

  //   $('#hideImpression').css({ width: $('#impression').width() });
  //   $('#hideImpression').css({ height: $('#impression').height() });

  //   this.originalContents = document.body.innerHTML;
  // }
  // oiwjeoifjwe() {
  //   console.log('impression w = ' + $('#impression').width());
  //   console.log('impression h= ' + $('#impression').height());

  //   $('#hideImpression').css({ width: $('#impression').width() });
  //   $('#hideImpression').css({ height: $('#impression').height() });

  // }

  impression() {
    console.log('HEYEYEYEYEYYE');
    var printContents = document.getElementById("impression").innerHTML;
    document.body.innerHTML = printContents;
    window.print();
  }


}
