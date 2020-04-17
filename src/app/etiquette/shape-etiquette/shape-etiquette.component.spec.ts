import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeEtiquetteComponent } from './shape-etiquette.component';

describe('ShapeEtiquetteComponent', () => {
  let component: ShapeEtiquetteComponent;
  let fixture: ComponentFixture<ShapeEtiquetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeEtiquetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeEtiquetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
