import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HeroeModel } from "../models/heroe.model";
import { GOOD_ADD_RESPONSE, GOOD_DELETE_RESPONSE, GOOD_EDIT_RESPONSE, HEROE_MOCK } from "./heroe.mock";

@Injectable({
  providedIn: 'root'
})
export class HeroeServiceMock {

    getAllHeroes() {
    return of(HEROE_MOCK)
  }

  addNewHeroe(newHeroe: HeroeModel, responseType: boolean) {
    

    return of(GOOD_ADD_RESPONSE);
  }

  editHeroe(newHeroeList: HeroeModel[], responseType: boolean): Observable<any> {
    
    return of(GOOD_EDIT_RESPONSE);
  }

  deleteHeroe(newHeroeList: HeroeModel[], responseType: boolean): Observable<any> {
    
    return of(GOOD_DELETE_RESPONSE);
  }
 
 
}