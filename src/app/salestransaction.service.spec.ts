import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsaleService } from './salestransaction.service';

describe('NewsaleService', () => {
  let service: NewsaleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsaleService]
    });

    service = TestBed.inject(NewsaleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save a sale', () => {
    const newSaleService: NewsaleService = { /* define properties */ } as NewsaleService;
    service.saveSale(newSaleService).subscribe((res) => {
      expect(res).toEqual(newSaleService);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/saveSale`);
    expect(req.request.method).toBe('POST');
    req.flush(newSaleService);
  });

  it('should retrieve a sale by ID', () => {
    const id = 1;
    const sale: NewsaleService = { /* define properties */ } as NewsaleService;
    service.getSale(id).subscribe((res) => {
      expect(res).toEqual(sale);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/newsale/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(sale);
  });

  it('should retrieve all sales', () => {
    const sales: NewsaleService[] = [ /* define properties */ ] as NewsaleService[];
    service.getAllSales().subscribe((res) => {
      expect(res).toEqual(sales);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/newsale`);
    expect(req.request.method).toBe('GET');
    req.flush(sales);
  });
});
