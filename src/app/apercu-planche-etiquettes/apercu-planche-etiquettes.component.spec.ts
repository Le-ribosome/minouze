import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuPlancheEtiquettesComponent } from './apercu-planche-etiquettes.component';

describe('ApercuPlancheEtiquettesComponent', () => {
  let component: ApercuPlancheEtiquettesComponent;
  let fixture: ComponentFixture<ApercuPlancheEtiquettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApercuPlancheEtiquettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApercuPlancheEtiquettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
