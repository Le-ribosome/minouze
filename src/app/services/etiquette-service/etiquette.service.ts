import { Injectable, Output } from '@angular/core';
import { Etiquette } from 'src/app/model/etiquette';
import { FormGroup } from '@angular/forms';
import * as localforage from 'localforage';
import { EventEmitter } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EtiquetteService {

  /**Étiquette et son eventEmiter qui sert à 
   * refresh l'étiquette à chaque changement
  */
  etiquette: Etiquette = new Etiquette();
  @Output()
  changeEtiquette: EventEmitter<Etiquette> = new EventEmitter<Etiquette>();

  /** Store l'étiquette à imprimer (change à chaque click sur le 
   * bouton imprimer dans la liste d'étiquette)*/
  toPrint: Etiquette = new Etiquette();


  constructor() { }

  /** Enregistre l'étiquette en base */
  saveEtiquette(etiquette: Etiquette): Etiquette {

    /**id generation */
    etiquette._id = this.makeid();

    console.log('etiquette save id = ' + etiquette._id)

    /**Store object in db */
    localforage.setItem(etiquette._id, etiquette).then(function () {
      console.log('etiquette saved in base : ' + JSON.stringify(etiquette));
    }).catch(function (err) {
      console.log('ERREUR setItem()' + err);
      // we got an error
    });
    return etiquette;
  }

  /**Fait un getAll de la base et push chaque Étiquette mappée
   * dans la liste d'étiquette retournée
   */
  getAllEtiquettes(): Etiquette[] {
    console.log('getAllEtiquettes()');
    /**Liste étiquette retour de base */
    let listeEtiquette: Array<Etiquette> = [];
    // Resulting key/value pair -- this callback
    // will be executed for every item in the
    // database.
    localforage.iterate(function (value, key, iterationNumber) {

      /**Transformation du retour string de la base en objet étiquette 
       * qui sera inséré dans la liste retournée:
      */
      let etiquetteTmp = new Etiquette();
      Object.assign(etiquetteTmp, value);
      console.log('Résultat du assign ' + JSON.stringify(etiquetteTmp));
      listeEtiquette.push(etiquetteTmp);
    }).then(function () {
      console.log('Iteration has completed');
    }).catch(function (err) {
      // This code runs if there were any errors
      console.log(err);
    });
    return listeEtiquette;
  }

  /**Supprime une étiquette de la base
   * @param id l'id de l'étiquette
   * @returns un booléen qui indique si erreur ou non
   */
  removeEtiquette(key: string): boolean {
    let error = false;
    /**Store object in db */
    localforage.removeItem(key).then(function (value) {
      console.log('VALUE = ' + JSON.stringify(value));
      error = true;
      // we got our value
    }).catch(function (err) {
      console.log('ERREUR setItem()' + err);
      // we got an error
      error = true;
    });
    return error;
  }

  /** Fonction créant un id (presque) unique à la nouvelle entrée */
  makeid() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 100; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  /** Fait le mapping entre le formulaire et un Dto étiquette 
  * qui sera envoyé au service - émettre la nouvelle étiquette
  * à chaque fois pour avoir un aperçu à jour */
  mapFormToEtiquette(f: FormGroup): Etiquette {
    /**Mapping */
    this.etiquette._alc = f.value['alc'];
    this.etiquette._titre = f.value['titre']
    this.etiquette._texte = f.value['texte']
    this.etiquette._ingredients = f.value['ingredients']
    this.etiquette._texteAvertissement = f.value['moderationTxt']
    this.etiquette._couleurLiseret = f.value['couleurLiseret']

    /**Émission */
    this.refreshEtiquette();

    return this.etiquette;
  }

  /**Émission de l'étiquette en cours de construction 
   * pour sa prévisualitation
  */
  refreshEtiquette() {
    console.log("Émission depuis service d'une étiquette mise à jour" + JSON.stringify(this.etiquette));
    this.changeEtiquette.emit(this.etiquette);
  }

}
