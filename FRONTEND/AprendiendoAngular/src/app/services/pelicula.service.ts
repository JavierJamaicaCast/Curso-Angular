import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService {
  public peliculas: Pelicula[];

  constructor() {
    this.peliculas = [
      new Pelicula(
        "Spiderman 4",
        "https://media.revistagq.com/photos/63edfa0ecf53bfbacf6f6580/4:3/w_2884,h_2163,c_limit/spider-man-4-tom-holland.jpg",
        2019
      ),
      new Pelicula(
        "Los vengadores Endgame",
        "https://hips.hearstapps.com/hmg-prod/images/vengadores-endgame-poster-1556056595.jpg?crop=1xw:0.525xh;center,top&resize=1200:*",
        2018
      ),
      new Pelicula(
        "Batman vs Superman",
        "https://img2.rtve.es/i/?w=1600&i=1658157293020.jpg",
        2015
      ),
    ];
  }

  holaMundo() {
    return "Hola mundo desde el servicio de angular";
  }

  getPeliculas() {
    return this.peliculas;
  }
}
