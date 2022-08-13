import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { FilmesServices } from './films.service';

describe('EmissionService', () => {
  let service: FilmesServices;
  let mockHttpClient: jasmine.SpyObj<HttpClient>;
  let defaultResponse = 'true';

  beforeEach(() => {
    mockHttpClient = jasmine.createSpyObj('mockHttpClient', [
      'get',
      'post',
      'delete',
      'put',
    ]);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: HttpClient, useValue: mockHttpClient }],
    });
    service = TestBed.inject(FilmesServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
