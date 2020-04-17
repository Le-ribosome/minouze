import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleEtiquetteComponent } from './nouvelle-etiquette.component';

describe('NouvelleEtiquetteComponent', () => {
  let component: NouvelleEtiquetteComponent;
  let fixture: ComponentFixture<NouvelleEtiquetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelleEtiquetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelleEtiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
