import { TestBed } from '@angular/core/testing';

import { InsereProdutoService } from './insere-produto.service';

describe('InsereProdutoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsereProdutoService = TestBed.get(InsereProdutoService);
    expect(service).toBeTruthy();
  });
});
