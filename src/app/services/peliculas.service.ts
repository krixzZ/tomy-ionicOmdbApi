import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  name = 'matrix';

  constructor(private http: HttpClient) { }

  getPelis() {
    return this.http.get(`http://www.omdbapi.com/?apikey=9594d591&s=${this.name}`);
  }

  getPeli(id) {
    return this.http.get(`http://www.omdbapi.com/?apikey=9594d591&i=${id}`);
  }
}
