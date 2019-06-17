import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.page.html',
  styleUrls: ['./pelicula-detalle.page.scss'],
})
export class PeliculaDetallePage implements OnInit {

  peli: any;

  constructor(private activatedRoute: ActivatedRoute, private peliService: PeliculasService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliService.getPeli(id).subscribe(res => {
      this.peli = res;
    });
  }

}
