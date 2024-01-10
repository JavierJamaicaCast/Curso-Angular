(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/"./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/styles.css": (
  /*!****************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/assets/css/styles.css ***!
    \****************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcAssetsCssStylesCss(module, exports) {
    module.exports = [[module.i, "body {\r\n    text-align: center;\r\n    margin: 0px;\r\n    padding: 0px;\r\n\r\n    /*FUENTES*/\r\n    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: antialiased;\r\n}\r\n\r\n#header {\r\n    height: 120px;\r\n    width: 100%;\r\n    background: white;\r\n    border-bottom: 1px solid #ccc;\r\n    border-top: 5px solid #f13e3e;\r\n}\r\n\r\n.center{\r\n    width: 75%;\r\n    margin: 0px auto;\r\n}\r\n\r\n.clearfix{\r\n    clear:both;\r\n    float:none;\r\n}\r\n\r\n#logo {\r\n    width: 30%;\r\n    font-size: 30px;\r\n    float: left;\r\n    margin-top: 35px;\r\n}\r\n\r\n#logo img {\r\n    display: block;\r\n    float: left;\r\n    height: 60px;\r\n    margin-top: -9px;\r\n    margin-right: 10px;\r\n    -webkit-animation: latir infinite 5s linear;\r\n            animation: latir infinite 5s linear;\r\n}\r\n\r\n@-webkit-keyframes latir {\r\n    0% {\r\n        transform: scale(1, 1);\r\n    }\r\n\r\n    50% {\r\n        transform: scale(1.02, 1.02);\r\n    }\r\n\r\n    55%{\r\n        transform: scale(0.95, 0.95);\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1, 1);\r\n    }\r\n}\r\n\r\n@keyframes latir {\r\n    0% {\r\n        transform: scale(1, 1);\r\n    }\r\n\r\n    50% {\r\n        transform: scale(1.02, 1.02);\r\n    }\r\n\r\n    55%{\r\n        transform: scale(0.95, 0.95);\r\n    }\r\n\r\n    100% {\r\n        transform: scale(1, 1);\r\n    }\r\n}\r\n\r\n#brand {\r\n    display: block;\r\n    margin: 0px;\r\n    float: left;\r\n}\r\n\r\n#menu{\r\n    width: 70%;\r\n    float:right;\r\n    font-size: 18px;\r\n}\r\n\r\n#menu ul{\r\n    line-height: 85px;\r\n    width: 60%;\r\n    float:right;\r\n}\r\n\r\n#menu ul li{\r\n    display: inline-block;\r\n    list-style: none;\r\n    height: 46px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n#menu a{\r\n    text-decoration: none;\r\n    color: #444;\r\n    transition: 300ms all;\r\n}\r\n\r\n#menu a:hover{\r\n    color: #f13e3e;\r\n}\r\n\r\n#slider{\r\n    width: 100%;\r\n    height: 350px;\r\n    /*line-height: 320px;*/\r\n    color: white;\r\n    text-shadow: 0px 0px 5px #444;\r\n\r\n    /*DEGRADADO CSS*/\r\n    background: rgba(248,80,50,1);\r\n    background: radial-gradient(ellipse at center, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 0%, rgba(230,31,5,1) 71%, rgba(231,56,39,1) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827', GradientType=1 );\r\n\r\n}\r\n\r\n#slider h1{\r\n    margin-top: 0.2px;\r\n    padding: 0px;\r\n    padding-top: 130px;\r\n    text-align: center;\r\n}\r\n\r\n.btn-white{\r\n    display: block;\r\n    background: white;\r\n    color:rgb(88, 88, 88);\r\n    padding: 10px;\r\n    width: 100px;\r\n    height: 35px;\r\n    margin: 0px auto;\r\n    font-size: 18px;\r\n    text-transform: uppercase;\r\n    text-shadow: none;\r\n    text-decoration: none;\r\n    line-height: 35px;\r\n    box-shadow: 0px 0px 5px rgb(88, 88, 88);\r\n    margin-top: 40px;\r\n    border-radius: 4px;\r\n    transition: 300ms all;\r\n}\r\n\r\n.btn-white:hover{\r\n    background: #444;\r\n    color:white;\r\n}\r\n\r\n#slider.slider-small{\r\n    height: 150px;\r\n}\r\n\r\n#slider.slider-small h1{\r\n    margin-top: 0.2px;\r\n    padding: 0px;\r\n    padding-top: 53px;\r\n}\r\n\r\n#content{\r\n    width: 70%;\r\n    float:left;\r\n    min-height: 650px;\r\n    margin-right: 20px;\r\n}\r\n\r\n#sidebar{\r\n    width: 25%;\r\n    float:left;\r\n}\r\n\r\n.sidebar-item{\r\n    background: #f7f7f7;\r\n    padding: 20px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.sidebar-item h3{\r\n    text-transform: uppercase;\r\n    font-size: 18px;\r\n    margin:0px;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n    border-bottom: 3px solid #eee;\r\n}\r\n\r\n.sidebar-item .btn{\r\n    margin: 0px auto;\r\n    margin-top: 10px;\r\n}\r\n\r\n.btn{\r\n   display: block;\r\n   background: black;\r\n   color: white;\r\n   padding: 15px; \r\n   font-weight: bold;\r\n   text-transform: uppercase;\r\n   font-size: 14px;\r\n   text-decoration: none;\r\n   max-width: 120px;\r\n   transition: 300ms all;\r\n   border: none;\r\n   cursor:pointer;\r\n}\r\n\r\n.btn-success{\r\n    background: rgb(23, 150, 19);\r\n}\r\n\r\n.btn-success:hover{\r\n    background:black;\r\n}\r\n\r\n.mid-form{\r\n    width: 50%;\r\n    margin: 0px auto;\r\n}\r\n\r\n.mid-form label{\r\n    display: block;\r\n    float:left;\r\n    text-align: left;\r\n    margin-top: 10px;\r\n    margin-bottom: 5px;\r\n    font-size: 17px;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea{\r\n    width: 100%;\r\n    min-height: 30px;\r\n    border: 1px solid #ccc;\r\n    padding: 3px;\r\n    margin-bottom: 5px;\r\n    transition: 300ms all;\r\n}\r\n\r\ninput[type=\"text\"]:focus,\r\ntextarea:focus{\r\n    box-shadow: 0px 0px 5px #eee inset;\r\n}\r\n\r\ntextarea{\r\n    width: 100%;\r\n    height: 150px;\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n    min-height: 150px;\r\n    max-height: 300px;\r\n}\r\n\r\n.radibuttons{\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    float:left;\r\n}\r\n\r\n#footer{\r\n    background: #f7f7f7;\r\n    width: 100%;\r\n    height: 70px;\r\n    line-height: 70px;\r\n    color: #444;\r\n}\r\n\r\n#footer p {\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.article-item{\r\n    width: 100%;\r\n    border-bottom: 1px solid #eee;\r\n    padding-bottom: 20px;\r\n    padding-top: 20px;\r\n    text-align: left;\r\n}\r\n\r\n.article-item .image-wrap {\r\n    width: 130px;\r\n    height: 130px;\r\n    overflow:hidden;\r\n    float:left;\r\n    margin-right: 15px;\r\n    border: 1px solid #ccc;\r\n}\r\n\r\n.article-item .image-wrap img{\r\n    height: 100%;\r\n    text-align: center;\r\n}\r\n\r\n.article-item h2{\r\n    display: block;\r\n    width:100%;\r\n    padding: 0px;\r\n    margin: 0px;\r\n    margin-bottom: 7px;\r\n}\r\n\r\n.article-item .date{\r\n    display: block;\r\n    width: 100%;\r\n    color: rgb(122, 122, 122);\r\n}\r\n\r\n.article-item a{\r\n    display: block;\r\n    color: #444;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n}\r\n\r\n.article-item a:hover{\r\n    text-decoration: underline;\r\n}\r\n\r\n.subheader{\r\n    font-size: 38px;\r\n    border-bottom: 1px solid #eee;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.article-detail .image-wrap{\r\n    float:none;\r\n    width:100%;\r\n    height: 300px;\r\n}\r\n\r\n.article-detail .image-wrap img{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.article-detail .subheader{\r\n    margin-top: 15px;\r\n    margin-bottom: 0px;\r\n    border:none;\r\n}\r\n\r\n/*RESPONSIVE*/\r\n\r\n/*Desde la anchura 963px hasta la anchura 1488px de pantalla*/\r\n\r\n@media (max-width: 1488px){\r\n    /*Se ejecutarán estos estilos*/\r\n    .center{\r\n        width: 85%;\r\n    }\r\n}\r\n\r\n/*Desde la anchura 0px hasta la anchura 963px de pantalla*/\r\n\r\n@media (max-width: 1314px){\r\n    .center{\r\n        width: 95%;\r\n    }\r\n\r\n    #menu ul{\r\n        width: auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 881px){\r\n    #logo{\r\n        width: 265px;\r\n    }\r\n\r\n    #menu{\r\n        width: auto;\r\n    }\r\n}\r\n\r\n@media (max-width: 813px){\r\n    #logo{\r\n        float:none;\r\n        /*width: 240px;*/\r\n        margin: 0px auto;\r\n        margin-top: 20px;\r\n    }\r\n\r\n    #menu,\r\n    #menu ul{\r\n       clear:both;\r\n       float:none;\r\n       width: 100%;\r\n       margin: 0px;\r\n       padding: 0px;\r\n       line-height: 43px;\r\n    }\r\n\r\n    #content{\r\n        float:none;\r\n        width: 100%;\r\n    }\r\n\r\n    #sidebar{\r\n        float:none;\r\n        width: 60%;\r\n        margin: 0px auto;\r\n        margin-bottom: 50px;\r\n    }\r\n\r\n    #slider h1{\r\n        padding-top: 115px;\r\n        font-size: 25px;\r\n    }\r\n\r\n    .mid-form{\r\n        width: 70%;\r\n    }\r\n}\r\n\r\n@media (max-width: 497px){\r\n    #header{\r\n        min-height: 130px;\r\n        overflow:hidden;\r\n    }\r\n\r\n    #menu,\r\n    #menu ul{\r\n        line-height: 50px;\r\n    }\r\n\r\n    #menu ul li{\r\n        margin-left: 7px;\r\n        margin-right: 7px;\r\n    }\r\n\r\n    #slider{\r\n        height: 180px;\r\n    }\r\n\r\n    #slider h1{\r\n        font-size: 19px;\r\n        padding-top: 30px;\r\n    }\r\n\r\n    #slider .btn-white{\r\n        margin-top: 20px;\r\n    }\r\n\r\n    #slider.slider-small{\r\n        height: 100px;\r\n    }\r\n\r\n    #slider.slider-small h1{\r\n       padding-top: 35px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY3NzL3N0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7O0lBRVosVUFBVTtJQUNWLHFHQUFxRztJQUNyRyxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0lBQ2hDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMkNBQW1DO1lBQW5DLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBaEJBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JC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c2V0cy9jc3Mvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgLypGVUVOVEVTKi9cclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNmMTNlM2U7XHJcbn1cclxuXHJcbi5jZW50ZXJ7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuLmNsZWFyZml4e1xyXG4gICAgY2xlYXI6Ym90aDtcclxuICAgIGZsb2F0Om5vbmU7XHJcbn1cclxuXHJcbiNsb2dvIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuXHJcbiNsb2dvIGltZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTlweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGFuaW1hdGlvbjogbGF0aXIgaW5maW5pdGUgNXMgbGluZWFyO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxhdGlyIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyLCAxLjAyKTtcclxuICAgIH1cclxuXHJcbiAgICA1NSV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1LCAwLjk1KTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4jYnJhbmQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4jbWVudXtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuI21lbnUgdWx7XHJcbiAgICBsaW5lLWhlaWdodDogODVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBmbG9hdDpyaWdodDtcclxufVxyXG5cclxuI21lbnUgdWwgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbiNtZW51IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcclxufVxyXG5cclxuXHJcbiNtZW51IGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2YxM2UzZTtcclxufVxyXG5cclxuI3NsaWRlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIC8qbGluZS1oZWlnaHQ6IDMyMHB4OyovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggIzQ0NDtcclxuXHJcbiAgICAvKkRFR1JBREFETyBDU1MqL1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDgsODAsNTAsMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ4LDgwLDUwLDEpIDAlLCByZ2JhKDI0MSwxMTEsOTIsMSkgMCUsIHJnYmEoMjMwLDMxLDUsMSkgNzElLCByZ2JhKDIzMSw1NiwzOSwxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQocmFkaWFsLCBjZW50ZXIgY2VudGVyLCAwcHgsIGNlbnRlciBjZW50ZXIsIDEwMCUsIGNvbG9yLXN0b3AoMCUsIHJnYmEoMjQ4LDgwLDUwLDEpKSwgY29sb3Itc3RvcCgwJSwgcmdiYSgyNDEsMTExLDkyLDEpKSwgY29sb3Itc3RvcCg3MSUsIHJnYmEoMjMwLDMxLDUsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMjMxLDU2LDM5LDEpKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ4LDgwLDUwLDEpIDAlLCByZ2JhKDI0MSwxMTEsOTIsMSkgMCUsIHJnYmEoMjMwLDMxLDUsMSkgNzElLCByZ2JhKDIzMSw1NiwzOSwxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMjQ4LDgwLDUwLDEpIDAlLCByZ2JhKDI0MSwxMTEsOTIsMSkgMCUsIHJnYmEoMjMwLDMxLDUsMSkgNzElLCByZ2JhKDIzMSw1NiwzOSwxKSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1tcy1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDI0OCw4MCw1MCwxKSAwJSwgcmdiYSgyNDEsMTExLDkyLDEpIDAlLCByZ2JhKDIzMCwzMSw1LDEpIDcxJSwgcmdiYSgyMzEsNTYsMzksMSkgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMjQ4LDgwLDUwLDEpIDAlLCByZ2JhKDI0MSwxMTEsOTIsMSkgMCUsIHJnYmEoMjMwLDMxLDUsMSkgNzElLCByZ2JhKDIzMSw1NiwzOSwxKSAxMDAlKTtcclxuICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjZjg1MDMyJywgZW5kQ29sb3JzdHI9JyNlNzM4MjcnLCBHcmFkaWVudFR5cGU9MSApO1xyXG5cclxufVxyXG5cclxuI3NsaWRlciBoMXtcclxuICAgIG1hcmdpbi10b3A6IDAuMnB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLXdoaXRle1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOnJnYig4OCwgODgsIDg4KTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2IoODgsIDg4LCA4OCk7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMzAwbXMgYWxsO1xyXG59XHJcblxyXG4uYnRuLXdoaXRlOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4jc2xpZGVyLnNsaWRlci1zbWFsbHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbiNzbGlkZXIuc2xpZGVyLXNtYWxsIGgxe1xyXG4gICAgbWFyZ2luLXRvcDogMC4ycHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNTNweDtcclxufVxyXG5cclxuI2NvbnRlbnR7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIG1pbi1oZWlnaHQ6IDY1MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4jc2lkZWJhcntcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVte1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc2lkZWJhci1pdGVtIGgze1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLnNpZGViYXItaXRlbSAuYnRue1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gICBwYWRkaW5nOiAxNXB4OyBcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICB0cmFuc2l0aW9uOiAzMDBtcyBhbGw7XHJcbiAgIGJvcmRlcjogbm9uZTtcclxuICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzc3tcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMywgMTUwLCAxOSk7XHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzczpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbn1cclxuXHJcbi5taWQtZm9ybXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4ubWlkLWZvcm0gbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbnRleHRhcmVhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGFsbDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMsXHJcbnRleHRhcmVhOmZvY3Vze1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggI2VlZSBpbnNldDtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4ucmFkaWJ1dHRvbnN7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcblxyXG4jZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuI2Zvb3RlciBwIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uYXJ0aWNsZS1pdGVte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYXJ0aWNsZS1pdGVtIC5pbWFnZS13cmFwIHtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmFydGljbGUtaXRlbSAuaW1hZ2Utd3JhcCBpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWl0ZW0gaDJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxufVxyXG5cclxuLmFydGljbGUtaXRlbSAuZGF0ZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogcmdiKDEyMiwgMTIyLCAxMjIpO1xyXG59XHJcblxyXG4uYXJ0aWNsZS1pdGVtIGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmFydGljbGUtaXRlbSBhOmhvdmVye1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5zdWJoZWFkZXJ7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYXJ0aWNsZS1kZXRhaWwgLmltYWdlLXdyYXB7XHJcbiAgICBmbG9hdDpub25lO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5hcnRpY2xlLWRldGFpbCAuaW1hZ2Utd3JhcCBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmFydGljbGUtZGV0YWlsIC5zdWJoZWFkZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuXHJcbi8qUkVTUE9OU0lWRSovXHJcblxyXG4vKkRlc2RlIGxhIGFuY2h1cmEgOTYzcHggaGFzdGEgbGEgYW5jaHVyYSAxNDg4cHggZGUgcGFudGFsbGEqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ4OHB4KXtcclxuICAgIC8qU2UgZWplY3V0YXLDoW4gZXN0b3MgZXN0aWxvcyovXHJcbiAgICAuY2VudGVye1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qRGVzZGUgbGEgYW5jaHVyYSAwcHggaGFzdGEgbGEgYW5jaHVyYSA5NjNweCBkZSBwYW50YWxsYSovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzE0cHgpe1xyXG4gICAgLmNlbnRlcntcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgfVxyXG5cclxuICAgICNtZW51IHVse1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODgxcHgpe1xyXG4gICAgI2xvZ297XHJcbiAgICAgICAgd2lkdGg6IDI2NXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNtZW51e1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODEzcHgpe1xyXG4gICAgI2xvZ297XHJcbiAgICAgICAgZmxvYXQ6bm9uZTtcclxuICAgICAgICAvKndpZHRoOiAyNDBweDsqL1xyXG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAjbWVudSxcclxuICAgICNtZW51IHVse1xyXG4gICAgICAgY2xlYXI6Ym90aDtcclxuICAgICAgIGZsb2F0Om5vbmU7XHJcbiAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRlbnR7XHJcbiAgICAgICAgZmxvYXQ6bm9uZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjc2lkZWJhcntcclxuICAgICAgICBmbG9hdDpub25lO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNzbGlkZXIgaDF7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDExNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWlkLWZvcm17XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ5N3B4KXtcclxuICAgICNoZWFkZXJ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgfVxyXG5cclxuICAgICNtZW51LFxyXG4gICAgI21lbnUgdWx7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI21lbnUgdWwgbGl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAjc2xpZGVye1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NsaWRlciBoMXtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NsaWRlciAuYnRuLXdoaXRle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3NsaWRlci5zbGlkZXItc21hbGx7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAjc2xpZGVyLnNsaWRlci1zbWFsbCBoMXtcclxuICAgICAgIHBhZGRpbmctdG9wOiAzNXB4O1xyXG4gICAgfVxyXG59Il19 */", '', '']];

    /***/
  }),
  /***/"./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css": (
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RSIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbiJdfQ== */", '', '']];

    /***/
  }),
  /***/"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js": (
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/
  /*! no static exports found */
  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};
    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }
        return memo;
      };
    }();
    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }
          memo[target] = styleTarget;
        }
        return memo[target];
      };
    }();
    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };
        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }
      return styles;
    }
    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;
        if (domStyle) {
          domStyle.refs++;
          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }
          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];
          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }
          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }
    function insertStyleElement(options) {
      var style = document.createElement('style');
      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;
        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }
      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });
      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');
        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }
        target.appendChild(style);
      }
      return style;
    }
    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }
      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */

    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();
    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;
        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }
        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }
    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;
      if (media) {
        style.setAttribute('media', media);
      }
      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }
        style.appendChild(document.createTextNode(css));
      }
    }
    var singleton = null;
    var singletonCounter = 0;
    function addStyle(obj, options) {
      var style;
      var update;
      var remove;
      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);
        remove = function remove() {
          removeStyleElement(style);
        };
      }
      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }
          update(obj = newObj);
        } else {
          remove();
        }
      };
    }
    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }
      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];
        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];
          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }
        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }
        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];
          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }
            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };

    /***/
  }),
  /***/"./src/assets/css/styles.css": (
  /*!***********************************!*\
    !*** ./src/assets/css/styles.css ***!
    \***********************************/
  /*! no static exports found */
  /***/
  function srcAssetsCssStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__( /*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!./styles.css */"./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/assets/css/styles.css");
    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }
    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = __webpack_require__( /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);
    if (content.locals) {
      module.exports = content.locals;
    }

    /***/
  }),
  /***/"./src/styles.css": (
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/
  /*! no static exports found */
  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__( /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */"./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");
    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }
    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = __webpack_require__( /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);
    if (content.locals) {
      module.exports = content.locals;
    }

    /***/
  }),
  /***/3: (
  /*!**********************************************************!*\
    !*** multi ./src/styles.css ./src/assets/css/styles.css ***!
    \**********************************************************/
  /*! no static exports found */
  /***/
  function _(module, exports, __webpack_require__) {
    __webpack_require__( /*! C:\Users\javie\Documents\Proyectos\E process med\Aprendizaje\Curso angular\FRONTEND\AprendiendoAngular\src\styles.css */"./src/styles.css");
    module.exports = __webpack_require__( /*! C:\Users\javie\Documents\Proyectos\E process med\Aprendizaje\Curso angular\FRONTEND\AprendiendoAngular\src\assets\css\styles.css */"./src/assets/css/styles.css");

    /***/
  })
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map