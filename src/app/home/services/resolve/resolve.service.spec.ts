import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { OpenJobsResolveService } from './resolve.service';

describe('Testing OpenJobsResolveService', () => {
  let resolverService: OpenJobsResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ OpenJobsResolveService ],
      imports: [ HttpClientTestingModule ]
    });
    resolverService = TestBed.inject(OpenJobsResolveService);
  });

  it('Service should be created', () => {
    TestBed.inject(OpenJobsResolveService);
    expect(resolverService).toBeTruthy();
  });
});