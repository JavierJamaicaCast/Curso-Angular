import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import { Pelicula } from "src/app/models/pelicula";
import { PeliculaService } from "src/app/services/pelicula.service";
@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"],
  providers: [PeliculaService],
})
export class PeliculasComponent implements OnInit {
  public titulo: String;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;
  constructor(private _peliculaService: PeliculaService) {
    this.fecha = new Date(2020, 8, 12);
    this.titulo = "Componente peliculas";
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit() {
    console.log(this._peliculaService.holaMundo);
  }
  ngDoCheck() {}
  ngOnDestroy() {}
  cambiarTitulo() {
    this.titulo = "Titulo cambiado";
  }
  mostrarFavorita(event) {
    this.favorita = event.pelicula;
  }
}
