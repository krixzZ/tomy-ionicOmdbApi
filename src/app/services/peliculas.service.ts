import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPelis(i_value) {
    return this.http.get(`http://www.omdbapi.com/?apikey=9594d591&s=${i_value}`);
  }

  getPeli(id) {
    return this.http.get(`http://www.omdbapi.com/?apikey=9594d591&i=${id}`);
  }
}
