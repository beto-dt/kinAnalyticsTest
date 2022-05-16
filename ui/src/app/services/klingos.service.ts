import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { klingos } from '../types';
import { API } from '../constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class KlingosService {
  constructor(private http: HttpClient) {}

  addklingo(klingos: klingos) {
    return this.http.post<klingos>(
      API.url+'klingons',
      klingos,
      httpOptions
    );
  }

  getklingos() {
    return this.http.get<any>(
      API.url+'klingons',
      httpOptions
    );
  }

  deleteklingos(id: any) {
    return this.http.delete<any>(
      API.url+'klingons/' + id,
      httpOptions
    );
  }
}
