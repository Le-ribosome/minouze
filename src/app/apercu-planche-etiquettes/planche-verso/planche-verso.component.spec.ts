import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlancheVersoComponent } from './planche-verso.component';

describe('PlancheVersoComponent', () => {
  let component: PlancheVersoComponent;
  let fixture: ComponentFixture<PlancheVersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlancheVersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlancheVersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
