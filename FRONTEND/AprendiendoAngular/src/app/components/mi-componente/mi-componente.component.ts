import { Component } from "@angular/core";

@Component({
  selector: "mi-componente",
  templateUrl: "./mi-componente.component.html",
})
export class MiComponente {
  public titulo: String;
  public comentario: String;
  public year: number;
  public mostrarPeliculas: Boolean;

  constructor() {
    this.mostrarPeliculas = true;
    this.titulo = "Hola mundo soy mi componente";
    this.comentario = "Comentario del componente";
    this.year = 2112;
    console.log("Componente mi-componente cargado");
    console.log(this.titulo, this.comentario, this.year);
  }

  ocultarPeliculas() {
    this.mostrarPeliculas = false;
  }
}
