import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service";
import { Global } from "src/app/services/global";
import swal from "sweetalert";
@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
  providers: [ArticleService],
})
export class ArticleComponent implements OnInit {
  public article: Article;
  url: any;
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe((params) => {
      let id = params["id"];
      this._articleService.getArticle(id).subscribe(
        (response) => {
          if (response.article) {
            this.article = response.article;
          } else {
            this._router.navigate(["/home"]);
          }
        },
        (error) => {
          console.log(error);
          this._router.navigate(["/home"]);
        }
      );
    });
  }
  delete(id) {
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminado el articulo no podras recuperarlo.",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          (response) => {
            swal("El articulo se borro correctamente", {
              icon: "success",
            });
            this._router.navigate(["/blog"]);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        swal("Accion cancelada");
      }
    });
  }
}
