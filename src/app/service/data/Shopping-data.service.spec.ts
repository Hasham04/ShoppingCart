import { TestBed } from '@angular/core/testing';

import { ShoppingListDataService } from './Shopping-data.service';

describe('ShoppingListDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingListDataService = TestBed.get(ShoppingListDataService);
    expect(service).toBeTruthy();
  });
});
