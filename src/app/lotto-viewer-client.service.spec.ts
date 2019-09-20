import { TestBed } from '@angular/core/testing';

import { LottoViewerClientService } from './lotto-viewer-client.service';

describe('LottoViewerClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LottoViewerClientService = TestBed.get(LottoViewerClientService);
    expect(service).toBeTruthy();
  });
});
