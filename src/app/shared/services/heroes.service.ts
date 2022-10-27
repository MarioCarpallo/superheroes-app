import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { BAD_RESPONSE, GOOD_ADD_RESPONSE, GOOD_DELETE_RESPONSE, GOOD_EDIT_RESPONSE, HEROE_MOCK } from "../mocks/heroe.mock";
import { HeroeModel } from "../models/heroe.model";

@Injectable({
    providedIn: 'root'
  })
  
  @Injectable()
  export class HeroesService {
    heroeList: HeroeModel[] = []
   
    constructor(private http: HttpClient) { }
  
    //Method for getting all the Heroes
    public getAllHeroes(): Observable<any>{
    //   const endpoint = `https://endpointexample.com/getAllHeroes`
    //   return this.http.get(endpoint);
        this.heroeList! ? this.heroeList = HEROE_MOCK : '';
        return of(this.heroeList)
    }

    //Method for adding new Heroe
    public addNewHeroe(newHeroe: HeroeModel, responseType: boolean): Observable<any>{
      this.heroeList.push(newHeroe);
      return of(responseType? GOOD_ADD_RESPONSE : BAD_RESPONSE)
    }

    //Method for edit a Heroe
    public editHeroe(newHeroeList: HeroeModel[], responseType: boolean): Observable<any>{
      this.heroeList = newHeroeList;
      return of(responseType? GOOD_EDIT_RESPONSE : BAD_RESPONSE)
    }

    //Method for delete a Heroe
    public deleteHeroe(newHeroeList: HeroeModel[], responseType: boolean): Observable<any>{
      this.heroeList = newHeroeList;
      return of(responseType? GOOD_DELETE_RESPONSE : BAD_RESPONSE)
    }
  
    
  }
  