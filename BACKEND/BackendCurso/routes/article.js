"use strict";

var express = require("express");

var articleController = require("../controllers/article");

var router = express.Router();
var multiparty = require("connect-multiparty");
var mdUpload = multiparty({ uploadDir: "./upload/articles" });

//Rutas de prueba
router.post("/datos-curso", articleController.datosCurso);
router.get("/test-controller", articleController.test);
//Rutas utiles
router.post("/save", articleController.save);
router.get("/articles/:last?", articleController.getArticles);
router.put("/article/:id", articleController.update);
router.get("/article/:id", articleController.getArticle);
router.delete("/article/:id", articleController.delete);
router.post("/upload-image/:id?", mdUpload, articleController.upload);
router.get("/get-image/:image",  articleController.getImage);
router.get("/search/:search",  articleController.search);

module.exports = router;
