import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEtiquetteComponent } from './formulaire-etiquette.component';

describe('FormulaireEtiquetteComponent', () => {
  let component: FormulaireEtiquetteComponent;
  let fixture: ComponentFixture<FormulaireEtiquetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireEtiquetteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireEtiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
