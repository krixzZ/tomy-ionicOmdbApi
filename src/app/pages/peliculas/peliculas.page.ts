import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  pelis: Observable<any>;
  @ViewChild('input_buscarpeli') input_buscarpelis: IonInput;


  constructor(private router: Router, private peliService: PeliculasService) { }

  ngOnInit() {
  }

  buscaPelis() {
    this.pelis = this.peliService.getPelis(this.input_buscarpelis.value);
  }

  reset() {
    this.pelis = undefined;
    this.input_buscarpelis.value = '';
  }

  abrirDetalle(peli) {
    let peliId = peli.imdbID;
    this.router.navigateByUrl(`/tabs/peliculas/${peliId}`)
  }

}
