import { TestBed } from "@angular/core/testing";
import { HeroeServiceMock } from "../mocks/heroe-service.mock";
import { GOOD_ADD_RESPONSE, GOOD_DELETE_RESPONSE, GOOD_EDIT_RESPONSE, HEROE_MOCK } from "../mocks/heroe.mock";
import { HeroesService } from "./heroes.service";

describe('HeroesService', () => {

    let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [
      { provide: HeroesService, useClass: HeroeServiceMock },
    ],});
    service = TestBed.get(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all the Heroes', () => {
    service.getAllHeroes().subscribe(res => {
      expect(res).toBe(HEROE_MOCK);
    });
  });

  it('should get all the Heroes', () => {
    service.addNewHeroe(HEROE_MOCK[0], true).subscribe(res => {
      expect(res).toBe(GOOD_ADD_RESPONSE);
    });
  });

  it('should get all the Heroes', () => {
    service.editHeroe(HEROE_MOCK, true).subscribe(res => {
      expect(res).toBe(GOOD_EDIT_RESPONSE);
    });
  });

  it('should get all the Heroes', () => {
    service.deleteHeroe(HEROE_MOCK, true).subscribe(res => {
      expect(res).toBe(GOOD_DELETE_RESPONSE);
    });
  });

  });