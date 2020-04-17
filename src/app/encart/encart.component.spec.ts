import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncartComponent } from './encart.component';

describe('EncartComponent', () => {
  let component: EncartComponent;
  let fixture: ComponentFixture<EncartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
