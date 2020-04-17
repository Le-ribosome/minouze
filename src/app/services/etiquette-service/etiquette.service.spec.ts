import { TestBed } from '@angular/core/testing';

import { EtiquetteService } from './etiquette.service';

describe('EtiquetteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtiquetteService = TestBed.get(EtiquetteService);
    expect(service).toBeTruthy();
  });
});
