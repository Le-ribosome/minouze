import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { EtiquetteService } from '../services/etiquette-service/etiquette.service';
import { Router } from '@angular/router';
import { Etiquette } from '../model/etiquette';

@Component({
  selector: 'app-formulaire-etiquette',
  templateUrl: './formulaire-etiquette.component.html',
  styleUrls: ['./formulaire-etiquette.component.scss']
})
export class FormulaireEtiquetteComponent implements OnInit {

  /** Dto étiquette */
  private etiquette = new Etiquette();

  /**
   * Le formulaire de l'étiquette
   */
  etiquetteForm: FormGroup = new FormGroup({
    titre: new FormControl(),
    texte: new FormControl(),
    ingredients: new FormControl(),
    alc: new FormControl(),
    moderationTxt: new FormControl(),
    couleurLiseret: new FormControl()
  });

  /** Flag indiquant si le form est submit */
  submitted = false;

  /** Couleur */
  color: string;

  constructor(private fb: FormBuilder, private etiquetteService: EtiquetteService, private router: Router) { }

  ngOnInit() {
    /** Initialisation de l'objet form avec ses validateurs
     * Une étiquette a:
     *  -Le nom de la bière: titre
     *  -Un texte descriptif => texte
     *  -Des ingrédients  => ingredients
     *  -Un %alc  => alc
     *  -Un message avertissement => moderationTxt
     *  -Une couleur de liseret => couleurLiseret
     */
    this.etiquetteForm = this.fb.group({
      titre: ['', Validators.required],
      texte: ['', Validators.required],
      ingredients: ['', Validators.required],
      alc: ['', Validators.required],
      moderationTxt: [this.etiquette._texteAvertissement, Validators.required],
      couleurLiseret: ['#000000', Validators.required]
    })
    //Subscribe to form changes to send new etiquette
    this.onChanges();

  }

  /**Émission de la nouvelle étiquette à chaque 
   * changement du formulaire pour avoir aperçu
   */
  onChanges(): void {
    this.etiquetteForm.valueChanges.subscribe(val => {
      this.etiquetteService.mapFormToEtiquette(this.etiquetteForm);
    });
  }

  // Permet d'accéder plus facilement aux inputs du formulaire
  get f() { return this.etiquetteForm.controls; }

  get formValue() {
    return this.etiquetteForm.value;
  }

  onSubmit() {
    this.submitted = true;
    console.log('submit : erreur = ' + this.etiquetteForm.invalid);
    // stop here if form is invalid
    if (!this.etiquetteForm.invalid) {
      const etiquetteId = this.saveEtiquette()._id;
      /**TODO: transformer ce save étiquette en promise pour gérer les erreurs ici */
      console.log('Étiquette sauvée: redirection ... id = ' + etiquetteId)
      this.router.navigateByUrl('/listeEtiquettes/' + etiquetteId);
    }
  }

  /** Enregistre l'étiquette en base après mapping
   * des valeurs du formulaire dans une étiquette */
  private saveEtiquette(): Etiquette {
    this.refreshEtiquette();
    return this.etiquetteService.saveEtiquette(this.etiquette);
  }

  /** Reset form values */
  onReset() {
    this.submitted = false;
    this.etiquetteForm.reset();
  }

  /**
   * Set la couleur du liseret au changement de couleur de l'input
   * @param color envoyé automatiquement par l'évennement onPickerChange de l'input
   */
  public onChangeColor(color: string) {
    console.log(color);
    this.etiquetteForm.patchValue({ couleurLiseret: color })
  }

  /** Refresh stored étiquette in service */
  refreshEtiquette() {
    this.etiquette = this.etiquetteService.mapFormToEtiquette(this.etiquetteForm);
  }
}
