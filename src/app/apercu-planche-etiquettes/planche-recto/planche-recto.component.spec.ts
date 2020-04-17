import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlancheRectoComponent } from './planche-recto.component';

describe('PlancheRectoComponent', () => {
  let component: PlancheRectoComponent;
  let fixture: ComponentFixture<PlancheRectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlancheRectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlancheRectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
