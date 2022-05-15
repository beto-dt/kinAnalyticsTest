import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { klingos } from '../types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class KlingosService {

  constructor(private http: HttpClient) {}
  
    addklingo(klingos: klingos) {
      return this.http.post<klingos>('http://localhost:3000/api/klingons', klingos, httpOptions);
    }

    getklingos() {
      return this.http.get<any>('http://localhost:3000/api/klingons', httpOptions);
    }

    deleteklingos( id : any) {
      return this.http.delete<any>('http://localhost:3000/api/klingons/'+id, httpOptions);
    }
}
