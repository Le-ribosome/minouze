import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtiquettesComponent } from './liste-etiquettes.component';

describe('ListeEtiquettesComponent', () => {
  let component: ListeEtiquettesComponent;
  let fixture: ComponentFixture<ListeEtiquettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEtiquettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEtiquettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
