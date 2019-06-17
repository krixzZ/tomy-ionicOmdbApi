import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  name = 'matrix';
  pelis: Observable<any>;

  constructor(private router: Router, private peliService: PeliculasService) { }

  ngOnInit() {
  }

  buscaPelis() {
   this.pelis = this.peliService.getPelis();
  }

  abrirDetalle(peli) {
    let peliId = peli.imdbID;
    this.router.navigateByUrl(`/tabs/peliculas/${peliId}`)
  }

}
