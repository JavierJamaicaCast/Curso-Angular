import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article";
import { ArticleService } from "src/app/services/article.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Global } from "src/app/services/global";
import swal from "sweetalert";

@Component({
  selector: "app-article-new",
  templateUrl: "./article-new.component.html",
  styleUrls: ["./article-new.component.css"],
  providers: [ArticleService],
})
export class ArticleNewComponent implements OnInit {
  public article: Article;
  public status: string;
  public page_title: string;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: "50",
    uploadAPI: {
      url: Global.url + "upload-image",
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    autoUpload: false,
    replaceTexts: {
      selectFileBtn: "Select Files",
      resetBtn: "Reset",
      uploadBtn: "Upload",
      dragNDropBox: "Drag N Drop",
      attachPinBtn: "Sube tu imagen para el articulo",
      afterUploadMsg_success: "Successfully Uploaded !",
      afterUploadMsg_error: "Upload Failed !",
    },
  };
  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.article = new Article("", "", "", null, null);
    this.page_title = "Crear articulo";
  }

  ngOnInit() {}
  onSubmit() {
    this._articleService.create(this.article).subscribe(
      (response) => {
        if (response.status == "success") {
          this.status = "success";
          this.article = response.article;
          swal(
            "Articulo creado",
            "El articulo se ha creado correctamente",
            "success"
          );
          this._router.navigate(["/blog"]);
        } else {
          this.status = "error";
        }
      },
      (error) => {
        console.log(error);
        this.status = "error";
        swal(
          "Edicion fallida",
          "El articulo no se ha editado correctamente",
          "error"
        );
      }
    );
  }
  imageUpload(data) {
    let image_data = data.body.image;
    this.article.image = image_data;
  }
}
