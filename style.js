/* Fonts */
@font-face {
    font-family: 'Love Ya Like A Sister';
    src: url('fonts/LoveYaLikeASister-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat';
    src: url('fonts/Montserrat-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
}
@font-face {
    font-family: 'Montserrat';
    src: url('fonts/Montserrat-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Montserrat';
    src: url('fonts/Montserrat-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}
@font-face {
    font-family: 'Montserrat';
    src: url('fonts/Montserrat-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'PT Serif';
    src: url('fonts/PTSerif-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}
@font-face {
    font-family: 'PT Serif';
    src: url('fonts/PTSerif-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'PT Serif';
    src: url('fonts/PTSerif-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'PT Serif';
    src: url('fonts/PTSerif-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}



@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}
@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}
@font-face {
    font-family: 'Inter Semi';
    src: url('fonts/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Inter Semi';
    src: url('fonts/Inter-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
}
@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'Inter';
    src: url('fonts/Inter-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Sen';
    src: url('fonts/Sen-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Sen';
    src: url('fonts/Sen-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

:root {
	--colorppal: #FF6DAF;
	--colortrans: #ff6daf54;
	--colorsecundario: #D2FF51;
	--colorsecundarioTexto: #aae500;
	--colorsecundariotrans: #d2ff5180;
    --GrisAnaya: #898989;

    /*Tamaños textos*/
    --TextoGeneral: 20px;
    --LineHeightGen: 29px;
    --TextoSecundario: 18px;
    --LineHeightSecundario: 25px;
}

b,
strong {
	font-weight: 600;
}

/*-------------------------------------------------*/
/*------ PARTE QUE NO AFECTA AL DISEÑO FINAL ------*/
/*-------------------------------------------------*/

    /* TOC */
    #indice .units ul li {
        background: #FFF;
        opacity: 1;
        -moz-transition: opacity 0.3s ease-in-out;
        -webkit-transition: opacity 0.3s ease-in-out;
        transition: opacity 0.3s ease-in-out;
        -webkit-border-radius: 0px;
        -moz-border-radius: 0px;
        border-radius: 0px;
        -moz-box-shadow: 3px 5px 5px #00000036;
        -webkit-box-shadow: 3px 5px 5px #00000036;
        box-shadow: 3px 5px 5px #00000036;
        margin-bottom: 11px;
    }

    #indice .units ul li.active:not(.disabled) {
        background: var(--colorppal);
    }

    body:not(.isTablet) #indice .units ul li:hover:not(.disabled),
    #indice .units ul li:focus:not(.disabled) {
        background: var(--colortrans);
    }
    body #indice .units ul li.active:hover:not(.disabled) {
        background: var(--colorppal);
        color: #FFF;
    }

    #indice .units ul li a:not(.delete) {
        padding: 0;
        -moz-border-radius: 0;
        -webkit-border-radius: 0;
        border-radius: 0;
    }
    #indice .units ul li a .title {
        padding: 14px 16px;
        color: #000;
        -moz-transition: margin-left 0.2s ease-in-out;
        -webkit-transition: margin-left 0.2s ease-in-out;
        transition: margin-left 0.2s ease-in-out;
    }
    body:not(.isTablet) #indice .units ul li:not(.disabled) a:hover .title {
        color:#000;
        margin-left: 30px;
    }
    body:not(.isTablet) #indice .units ul li.active:not(.disabled) a:hover .title {
        margin-left: 30px;
    }

    body:not(.isTablet) #indice .units ul li.active:not(.disabled) a .title {
        margin-left: 30px;
        color: #000;
    }

    #indice .unit-content .header.default {
        background: var(--colorppal) !important;
    }
    #indice a:hover,
    #indice a:active,
    #indice a:focus {
        color: var(--colorppal);
    }
    #indice .btn-primary {
        color: #000;
        padding-top: 5px;
    }
    #indice .actividades a:hover {
        color: var(--colorppal);
    }
    /*--*/

    /* MENÚ DESPLEGABLE */
    #book-index #indice .units ul li a .title {
        margin: 0;
        font-size: 16px;
        font-weight: bold;
    }
    #book-index #indice .units ul li a:not(.delete) {
        padding: 5px 20px 5px 20px;
        border-bottom: 2px solid var(--colorppal);
        background-color: #e3e3e3;
    }
    body:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover, #book-index #indice .units ul li.active a {
        background: var(--colorppal);
        color: #000;
    }
    #book-index #indice .units ul li a:hover .title {
        margin: 0;
        font-size: 16px;
        color: #000;
    }
    #book-index .col-main {
        background: var(--colorppal);
    }
    #book-index #indice .unit-content .content .title-buttons {
        text-align: left;
    }
    #book-index .units ul li a .title {
        padding: 12px 0px;
    }
    #book-index #indice .unit-content .content .title-buttons .btn {
        background: #fff;
        color: #000;
        padding: 5px 15px;
        border-radius: 5px;
    }
    #book-index #indice .unit-content .actividades .item {
        padding: 12px 15px;
        background: none;
        color: white;
    }
    #book-index #indice .unit-content .actividades .item .title {
        color: #FFF;
        font-weight: bold;
    }
    body:not(.isTablet) #book-index #indice .unit-content .actividades .item:hover,
    #book-index #indice .unit-content .actividades .item.active,
    #book-index #indice .unit-content .actividades .item.current {
        color: #fff;
        background: #0000002e;
    }
    body:not(.isTablet) #book-index #indice .unit-content .actividades .item:active,
    #book-index #indice .unit-content .actividades .item.active,
    #book-index #indice .unit-content .actividades .item.current {
        background: #0000002e;
    }
    #book-index #indice .unit-content a {
        color: #fff;
    }
    #book-index #indice .unit-content a:hover,
    #book-index #indice .unit-content a:active,
        #book-index #indice .unit-content a:focus {
        color: #fff;
        font-weight: bold;
    }
    /*---*/
    /*logo*/
    .content_type_curso_Anaya_Primaria_2022_Dev.content_type_clase_Anaya_Primaria_2022_Dev .libro-left ul li .title:before { 
    opacity: 0;
    }

    /* NAVBAR */
    .Anaya_Primaria_2022_Dev-navbar h3 {
        width: 75%;
        margin: auto;
        margin-bottom: 15px;
        font-size: 18px;
        font-weight: bold;
    }
    .Anaya_Primaria_2022_Dev-navbar {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 50px;
        background: var(--colorppal);
        border-bottom: 0;
        border-top: 4px solid #555;
        display: none;
    }
    .logo-publisher {
        display: none;
        background: none;
    }
    body.is_app .Anaya_Primaria_2022_Dev-navbar {
        -webkit-transition: top 0.5s linear;
        -o-transition: top 0.5s linear;
        -moz-transition: top 0.5s linear;
        transition: top 0.5s linear;
    }
    body.is_app .Anaya_Primaria_2022_Dev-navbar.ocultar {
        top: -136px;
    }
    .Anaya_Primaria_2022_Dev-navbar .navbar-content {
        width: 100%;
        height: 100%;
        padding: 0 20px;
        text-align: center;
    }
    .Anaya_Primaria_2022_Dev-navbar .copyright {
        color: #fff;
        line-height: 5.0rem;
    }
    .slider-navigator:hover,
    .slider-navigator.disabled {
        opacity: .5;
        filter: alpha(opacity=50);
    }
    /*---*/
/*---------*/

/*-------------------------------------------------*/
/*------ PARTE QUE SÍ AFECTA AL DISEÑO FINAL ------*/
/*-------------------------------------------------*/
/*General */
body {
	font-weight: normal;
	text-align: left;
	font-family: 'Inter', sans-serif;
}
#swipeview-slider > div {
	background-color: #fff;
}
#actividad .class_slide {
    padding: 40px 60px 0px;
}

.texto_curso p:last-of-type {
    margin-bottom: 0;
}
#actividad .texto_curso {
	font-size: var(--TextoGeneral);
	line-height: var(--LineHeightGen) !important;
}
.texto_curso p {
	line-height: var(--LineHeightGen) !important;
	margin: 0 0 15px;
}
#actividad .pregunta .texto_curso {
    font-size: var(--TextoGeneral);
}
.slide-wrapper {
	text-align: left;
}
.body_clase .content-wrapper,
 .body_clase.view-mode .content-wrapper {
    padding-bottom: 0;
}
#actividad .carousel-inner .item-container {
    background-image: none;
    -webkit-box-shadow:  #00000029 6px 3px 8px;
    -moz-box-shadow:  #00000029 6px 3px 8px;
    box-shadow: #00000029 6px 3px 8px;
    margin: 20px auto 30px;
    padding: 0px;
    padding-bottom: 90px;
    position: relative;
    width: 95%;
    max-width: 1200px;
}

/*MODIFICACIONES MARGENES SLIDES Y AJUSTE IMAGENES AUXILIARES*/
#actividad .carousel-inner .item-container {
    background-image: none;
    padding: 0px;
    padding-bottom: 90px;
    position: relative;
    -moz-box-shadow: inset 0px 4px 4px #c8c8c8;
    -webkit-box-shadow: inset 0px 4px 4px #c8c8c8;
    box-shadow: inset 0px 4px 4px #c8c8c8;
    margin-top: -5px;
    margin-bottom: 0;
    margin: -5px auto 0;
    width: 95%;
    max-width: 1400px;
}
#actividad .carousel-inner .item-container.aux-fullscreen,
 #actividad .carousel-inner .item-container.aux-bckg {
     max-width: 1900px;
}
    /*Margin Bottom al grid para respetar el margin-bottom de los párrafos*/
    .bck-row {
        margin-bottom: 15px;
    }


/*Input Blanco*/
.input_blanco .slide_main .html-book input {
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	border: 1px solid #ccc;
	background: #fff;
}



/*tamaño enunciado listas*/
#actividad textarea {
    font-size: var(--TextoGeneral);
}

/*ENLACE WEB*/
#actividad a,
body:not(.edit) #actividad a:not(.cke_button):not(.zoom_flag_img) {
	color: var(--colorppal);
	background-color: transparent;
}

/*--*/


/* Titulo de la slide */
#actividad .content .header .title {
    margin-bottom: 0px;
}
#actividad .content .header .title h3 {
    margin-top: 0;
    background: none;
    color: #000;
    padding: 0;
    font-size: 48px;
    border: 0;
    font-weight: normal;
    font-family: 'Love Ya Like A Sister';
}
#actividad .content .header .title h3::before{
	content: '';
	display: none;
}

.slide_main input:focus,
.slide_main .form-control:focus {
	border-color: #aaa;
}

.slide_main .html-book input {
    background: #fff;
}



#actividad .workspace.chooseblanks .inline-answer a {
	margin: -7px 2px 2px 2px;
}

.bck-i-fullscreen figcaption {
	margin-top: -20px;
	border-bottom: 0;
	-webkit-border-radius: 0px;
	-moz-border-radius: 0px;
	border-radius: 0px;
	background: transparent;
}

/*Icono audio*/
#actividad .player.audio {
	background-image: url(images/icono_audio.png);
	color: #fff;
    background-color: var(--colorppal) !important;
}


#actividad .content img.player,
#actividad .player.audio,
#actividad .player.video,
#help-panel-content .player,
#remote-alert-modal-rich .player {
	height: 25px !important;
	width: 27px;
	display: inline-block;
	background-repeat: no-repeat;
	border-radius: 100%;
	margin: 0 5px;
	vertical-align: sub;
}
#actividad .player.audio {
    background-image: url(images/icono_audio.png);
    color: #fff;
    background-color: transparent;
    width: 30px !important;
    height: 30px !important;
    background-color: transparent;
    vertical-align: bottom;
    margin: 0 4px;
}




body #actividad a.bck-file-attach,
 body:not(.edit) #actividad a.bck-file-attach:not(.cke_button):not(.zoom_flag_img) {
    color: #000;
}
/*
body:not(.edit) .bck-sub-label,
body:not(.edit) .bck-file-label {
	background: transparent;
	-webkit-border-radius: 5px 5px;
	-moz-border-radius: 5px 5px;
	border-radius: 5px 5px;
	max-width: 200px;
	margin: 0px;
	padding: 0px;
	display: inline-block;
	text-align: center;
	overflow-wrap: break-word;
}

body:not(.edit) .bck-file-attach:before {
    content: "\f15b";
    background-image: none;
    background-repeat: no-repeat;
    padding: 1px 0px;
    background-size: contain;
    margin-top: 4px;
    position: absolute;
    font-family: 'FontAwesome';
    display: none;
}

body:not(.edit) .bck-file-attach img {
	display: none;
}

body:not(.edit) .bck-file-attach span {
    display: inline-block;
    max-width: 75%;
    text-overflow: ellipsis;
    overflow: hidden;
    background-color: white;
    position: relative;
    box-shadow: 0px 6px 15px #0000004a;
    -webkit-box-shadow: 0px 6px 15px #0000004a;
    -moz-box-shadow: 0px 6px 15px #0000004a;
    padding: 20px 15px;
    border-radius: 10px;
}
body:not(.edit) .bck-file-label:before {
    content: "";
    background-image: url(images/Icono_adjuntos.png);
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 50px;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
}
*/


.bck-file-attach img {
	display: none;
}
.bck-file-label {
    position: relative;
    background-color: #fff;
    box-shadow: 0px 5px 10px #0000004d;
    padding: 10px;
}
.bck-file-label:before {
    content: "";
    background-image: url(images/Icono_adjuntos.png);
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 50px;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
}

/* TÍTULOS */

/*-- Título 1 --*/
.bck-title-1:before {
	display: none;
}
.bck-title-1, 
    .bck-title1 {
        color: #000;
        font-size: 48px;
        font-weight: normal;
        line-height: 3.0rem;
        margin: 30px 0 20px 0px;
        font-family: 'Love Ya Like A Sister';
}
.bck-title-2,
.bck-title2 {
    color: var(--colorppal);
    font-size: 36px;
    font-weight: bold;
    margin: 20px 0 15px 0;
}
.bck-title-3,
.bck-title3 {
    background: none;
    color: var(--colorppal);
    font-size: 30px;
    font-weight: 500;
}
.bck-title-4 {
    background-color: #90F6BB;
    color: #000;
    font-size: var(--TextoSecundario);
    font-weight: normal;
    border-radius: 30px;
    padding: 7px 15px;
    width: fit-content;
    -webkit-width: fit-content;
    width: -moz-fit-content;
    font-family: 'Sen', sans-serif;
    text-transform: uppercase;
    margin: 20px 0 10px;
    text-align: center;
}
.bck-title-5 {
    background-color: #FF906D;
    color: #fff;
    font-size: var(--TextoSecundario);
    font-weight: normal;
    border-radius: 30px;
    padding: 7px 15px;
    width: fit-content;
    -webkit-width: fit-content;
    width: -moz-fit-content;
    font-family: 'Sen', sans-serif;
    text-transform: uppercase;
    margin: 20px 0 10px;
    text-align: center;
}
.bck-title-6 {
    background-color: #EBFFB2;
    color: #000;
    font-size: var(--TextoSecundario);
    font-weight: normal;
    border-radius: 30px;
    padding: 7px 15px;
    width: fit-content;
    -webkit-width: fit-content;
    width: -moz-fit-content;
    font-family: 'Sen', sans-serif;
    text-transform: uppercase;
    margin: 20px 0 10px;
    text-align: center;
}
.bck-title-7 {
    background-color: #fff;
    color: #000;
    font-size: var(--TextoSecundario);
    font-weight: normal;
    border: 1px solid var(--colorppal);
    border-radius: 30px;
    padding: 7px 15px;
    width: fit-content;
    -webkit-width: fit-content;
    width: -moz-fit-content;
    font-family: 'Sen', sans-serif;
    text-transform: uppercase;
    margin: 20px 0 10px;
    text-align: center;
}
.bck-title-8 {
    color: #000;
    font-size: var(--TextoSecundario);
    font-weight: 500;
    margin: 15px 0 5px;
}
.bck-title-9 {
    font-size: var(--TextoSecundario);
    color: #5F5D5D;
    font-weight: bold;
    border: 2px dashed #B5B8BA;
    padding: 10px;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
    -moz-box-shadow: 0px 2px 2px #0000001a;
    -webkit-box-shadow: 0px 2px 2px #0000001a;
    box-shadow: 0px 2px 2px #0000001a;
}
.bck-title-10 {
    color: #000;
    font-size: var(--TextoSecundario);
    font-family: 'PT Serif', serif;
    font-weight: bold;
    margin: 15px 0 5px;
}
.bck-title-11 {
    color: #000;
    font-size: 36px;
    font-family: 'Love Ya Like A Sister', cursive;
    font-weight: normal;
    margin: 20px 0 15px;
}
/*Estilo de párrafo*/
p.bck-p-1 {
    font-family: 'PT Serif', serif;
    text-align: right;
    font-size: var(--TextoSecundario);
    line-height: var(--LineHeightSecundario) !important;
}
p.bck-p-2 {
    font-family: 'PT Serif',serif;
}
p.bck-p-3 {
    font-family: 'PT Serif';
    border-left: 2px solid var(--colorppal);
    padding-left: 10px;
}
p.bck-p-4 {
    font-family: 'PT Serif', serif;
    border-left: 2px dashed var(--colorppal);
    padding-inline-start: 10px;
}


/*Énfasis */
.bck-enfasis-1 {
    color: var(--colorppal);
    font-weight: bold;
}
.bck-enfasis-2 {
    border-bottom: 3px solid var(--colorppal);
}
.bck-enfasis-3 {
    background-color: var(--colortrans);
    padding: 2px 7px;
    border-radius: 3px;
}
.bck-enfasis-4 {
    font-family: 'PT Serif', serif;
}
.bck-enfasis-5 {
    font-family: 'PT Serif', serif;
    color: var(--colorppal);
    font-weight: bold;
}
.bck-enfasis-6 {
    color: var(--colorsecundarioTexto);
    font-weight: bold;
}
.bck-enfasis-7 {
    border-bottom: 3px solid var(--colorsecundarioTexto);
}
.bck-enfasis-8 {
    background-color: var(--colorsecundariotrans);
    padding: 2px 7px;
    border-radius: 3px;
}
.bck-enfasis-9 {
    font-family: 'PT Serif', serif;
    color: var(--colorsecundarioTexto);
    font-weight: bold;
}
.bck-enfasis-10 {
    font-family: 'Love Ya Like A Sister', cursive;
    font-size: 24px;
}
.bck-enfasis-11 {
    font-family: 'Love Ya Like A Sister', cursive;
    font-size: 36px;
}


/* ---- CAJAS ---*/
.bck-box {
    position: relative;
    max-width: 100%;
    text-align: left;
	background: inherit;
	padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid var(--colorppal);
}
.bck-title {
    font-weight: bold;
    color: inherit;
    border: 0;
    font-size: var(--TextoGeneral);
    padding: 0   
}


.bck-box .bck-content {
    padding: 0;
    text-align: left;
}
.bck-box.center {
    text-align: inherit;
    margin-left: auto;
    margin-right: auto;
}
.texto_curso .bck-box p {
    margin: 0 0 15px;
    display: block;
}
body:not(.edit) .bck-box p {
    margin: 0 0 15px;
    display: block;
}
body:not(.edit) .bck-box p:last-of-type {
    margin: 0;
}
body .bck-box .bck-title p {
    margin: 0;
}

/*Caja 1 */
.bck-box.bck-box-1:after {
    display: none;
}
.bck-box.bck-box-1:before {
    display: none;
}
.bck-box.bck-box-1 {
        padding: 0;
        border: 0;
}
.bck-box.bck-box-1>.bck-title {
        background-color: #D2FF51;
        font-weight: bold;
        font-size: var(--TextoGeneral);
        color: #000;
        text-align: center;
        padding: 5px 25px;
        border-radius: 30px;
        display: block;
        margin: 0px auto;
        position: relative;
        width: fit-content;
        z-index: 1;
        margin-bottom: -17px;
}
.bck-box.bck-box-1>.bck-content {
        padding: 20px 20px;
        border: 4px dotted var(--colorsecundario);
        border-radius: 30px;
        z-index: 0;
        box-shadow: 0px 5px 6px #00000042;
        background: white;
}

/* CAJA 2 */
.bck-box.bck-box-2>.bck-title:before {
	display: none;
}
.bck-box.bck-box-2 {
    background-color: white;
    color: #231F20;
    border: 0;
    margin-top: 35px;
    padding: 0;
    border-radius: 0;
}
 .bck-box.bck-box-2>.bck-title {
    margin-left: 20px;
    color: #8C8C8C;
    font-weight: 500;
    padding: 0;
    font-size: 24px;
    padding-bottom: 5px;
}
.bck-box.bck-box-2>.bck-content {
    padding: 10px 20px;
    border: 3px dashed var(--colorsecundario);
    border-radius: 20px;
}

/*CAJA 3 */
.bck-box.bck-box-3 {
    padding: 0;
    border: 0;
    font-family: 'Montserrat', sans-serif;
}
.bck-box.bck-box-3>.bck-title {
    font-weight: normal;
    color: #000;
    border: 0;
    font-size: 24px;
    padding-bottom: 5px;
}
.bck-box.bck-box-3>.bck-content {
    padding: 15px 20px;
    border: 2px dashed #B5B8BA;
}

/*CAJA 4 */
.bck-box.bck-box-4 {
    margin-top: 40px;
    padding: 15px 20px;
    border: 4px dotted var(--colorsecundario);
    border-radius: 30px;
    background-color: #fff;
    position: relative;
}
.bck-box.bck-box-4:before {
    content: "";
    position: relative;
    background-image: url(images/icono_caja04.png);
    background-size: 35px;
    background-repeat: no-repeat;
    background-color: var(--colorsecundario);
    border-radius: 31px;
    background-position: center;
    margin: auto;
    display: block;
    width: 50px;
    height: 50px;
    margin-top: -43px;
}
.bck-box.bck-box-4>.bck-title {
    color: #000;
    font-weight: bold;
    font-size: var(--TextoGeneral);
}
.bck-box.bck-box-4>.bck-content {
    padding: 0;
    border: 0;
}

/*CAJA 5*/
.bck-box.bck-box-5 {
    padding: 0;
    border: 0;
}
.bck-box-5>.bck-title {
    font-size: 24px;
    font-weight: 500;
    color: var(--colorppal);
    margin-left: 20px;
    padding-bottom: 5px;
}
.bck-box-5>.bck-content {
    border: 1px solid var(--colorppal);
    border-radius: 30px;
    background-color: white;
    padding: 15px 20px;
}

/*Caja 6*/
.bck-box.bck-box-6 {
    padding: 0;
    border: 0;
    font-family: 'Love Ya Like A Sister',cursive;
}
.bck-box-6>.bck-title {
    font-size: 24px;
    color: #000;
    margin-left: 20px;
    padding-bottom: 5px;
    font-weight: normal;
}
.bck-box-6>.bck-content {
    border: 1px solid var(--colorppal);
    border-radius: 30px;
    background-color: white;
    padding: 15px 20px;
}

/*Caja 7*/
.bck-box.bck-box-7 {
    background-color: white;
    color: #231F20;
    border: 3px dashed var(--colorsecundario);
    padding: 10px 20px;
    border-radius: 20px;
}
 .bck-box.bck-box-7>.bck-title {
}
.bck-box.bck-box-7>.bck-content {
}

/*CAJA 8*/
.bck-box.bck-box-8 {
    padding: 0;
    border: 0;
}
.bck-box-8>.bck-title {
    font-size: 24px;
    font-weight: 500;
    color: var(--colorppal);
    margin-left: 20px;
    padding-bottom: 5px;
    text-align: center;
}
.bck-box-8>.bck-content {
    border: 1px solid var(--colorppal);
    border-radius: 30px;
    background-color: white;
    padding: 15px 20px;
}

/*CAJA 9*/
.bck-box.bck-box-9 {
    padding: 0;
    border: 0;
}
.bck-box-9>.bck-title {
    margin-left: 20px;
    padding-bottom: 5px;
    font-weight: 500;
    text-align: center;
}
.bck-box-9>.bck-content {
    padding: 10px 20px;
    border-radius: 20px;
    background-color: var(--colorppal);
    color: #fff;
    text-align: center;
}
/*CAJA 10*/
.bck-box.bck-box-10 {
    border: 0;
    background-color: var(--colorsecundariotrans);
}
/*CAJA 11*/
.bck-box.bck-box-11 {
    background-color: #7eff5180;
    border: 0;
    text-align: center;
}
.bck-box-11>.bck-content {
    text-align: center;
}
/*CAJA 12*/
.bck-box.bck-box-12 {
    background-color: #7eff5180;
    border: 0;
}
/*CAJA 13*/
.bck-box.bck-box-13 {
    background-color: white;
    color: #231F20;
    border: 3px dashed var(--colorppal);
    padding: 10px 20px;
    border-radius: 20px;
}
 .bck-box.bck-box-13>.bck-title {
}
.bck-box.bck-box-13>.bck-content {
}

/*CAJA 14*/
.bck-box-14 {
    background-color: #D2FF51;
    border: 0;
    border-radius: 30px;
}

/*Desplegables*/
/*---*/
/* Content: Dropdown box */
.body_clase #actividad .bck-dropdown {
    margin: 15px 0;
  }
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-titulo {
    color: #000;
    cursor: pointer;
    font-size: var(--TextoSecundario);
    font-weight: bold;
    padding-right: 40px;
  }
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-button {
    padding: 10px;
    border: 0;
    position: relative;
    cursor: pointer;
    width: fit-content;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    display: inline-block;
    background-color: var(--colorppal);
    border-radius: 0 12px 12px 0;
}
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-icon {
    position: absolute;
    right: 1.1rem;
    color:#000;
  }
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-icon>.fa {
    color: #000;
    border: none;
    padding: 0;
    font-size: 18px;
  }
  
  .body_clase #actividad .bck-dropdown .bck-dropdown-content {
    width: 100%;
    padding: 30px 20px 20px 20px;
    background-color: #EFEFEF;
    margin-top: -15px;
    max-height: 600px;
    font-size: 15px;
    border-radius: 0 12px 12px 0;
}
  .body_clase #actividad .bck-dropdown .bck-dropdown-content p {
    line-height: 22px !important;
}

/*Desplegable 1 (Igual que por defecto)*/
.bck-dropdown-1 .bck-dropdown-icon {
    background-color: transparent;
}
.bck-dropdown.bck-dropdown-1 {
    background-color: transparent;
    border: 0;
}
.bck-dropdown-1 .fa-chevron-up:before,
 .bck-dropdown-1 .fa-chevron-down:before {
    font-size: var(--TextoGeneral);
}

/*Desplegable 2*/
.bck-dropdown-2 .fa-chevron-up:before {
    content: "\f077";
}
.bck-dropdown-2 .fa-chevron-down:before {
    content: "\f078";
}
.body_clase #actividad .bck-dropdown.bck-dropdown-2 .bck-dropdown-button {
    background-color: #C7C5C5;
}

/*Desplegable 3*/
.body_clase #actividad .bck-dropdown-3 {
    margin: 25px 0 25px;
}
.body_clase #actividad .bck-dropdown-3 .bck-dropdown-button {
    background-color: #35EDC5;
    font-size: var(--TextoSecundario);
    padding: 0px 15px 0 18px;
    border-radius: 30px;
}
.body_clase #actividad .bck-dropdown-3 .bck-dropdown-titulo {
    font-family: 'Sen',sans-serif;
    font-size: var(--TextoSecundario);
    font-weight: normal;
    padding-right: 10px;
}
.body_clase #actividad .bck-dropdown-3 .bck-dropdown-content {
    background-color: white;
    border: 4px solid #35edc5;
    border-radius: 0px 30px 30px 30px;
    font-size: var(--TextoGeneral);
    line-height: var(--LineHeightGen);
}
.body_clase #actividad .bck-dropdown-3 .bck-dropdown-content p {
    line-height: var(--LineHeightGen) !important;
}

.body_clase #actividad .bck-dropdown-3 .bck-dropdown-icon {
    left: -28px;
    border: 2px solid white;
    border-radius: 50px;
    background-color: #35edc5;
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    top: -11px;
    height: 50px;
    width: 50px;
}
.body_clase #actividad .bck-dropdown-3 .bck-dropdown-icon>.fa {
    display: flex;
    -moz-transition: transform 0.2s ease-in-out;
    -webkit-transition: transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
    align-items: center;
    justify-content: center;
}
.body_clase #actividad .bck-dropdown-3 .bck-dropdown-icon>.fa-chevron-up {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
}
.body_clase #actividad .bck-dropdown-3 .bck-dropdown-icon>.fa:before {
    content: "";
    background-image: url(images/icono_desplegable3.png);
    padding: 22px 23px;
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: center;
}

/*Desplegable 4*/
.body_clase #actividad .bck-dropdown-4 .bck-dropdown-button {
    border-radius: 30px;
    min-width: 300px;
    padding: 5px;
}
.body_clase #actividad .bck-dropdown-4 .bck-dropdown-icon {
    color: #fff;
}
.body_clase #actividad .bck-dropdown-4 .bck-dropdown-icon>.fa {
    color: #fff;
}
.body_clase #actividad .bck-dropdown-4 .bck-dropdown-titulo {
    color: #fff;
    font-family: 'Sen', sans-serif;
    font-weight: normal;
    padding-right: 40px;
}
.body_clase #actividad .bck-dropdown-4 .bck-dropdown-content {
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 20px;
    font-size: var(--TextoGeneral);
}
.body_clase #actividad .bck-dropdown-4 .bck-dropdown-content p {
    line-height: var(--LineHeightGen) !important;
}




/*---*/
/*Flipbox*/
body:not(.edit) .bck-flipbox {
		margin: 15px 0;
		font-size: var(--TextoGeneral);
        min-height: 100px;
}

body:not(.edit) .bck-flipbox-face.front {
    border: 0;
    -moz-box-shadow: 0px 5px 9px var(--colortrans);
    -webkit-box-shadow: 0px 5px 9px var(--colortrans);
    box-shadow: 0px 5px 9px var(--colortrans);
    color: white;
    background-color: var(--colorppal);
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    border-radius: 10px;
}
body:not(.edit) .bck-flipbox-face.back {
    color: #595959;
    border: 2px solid var(--colorsecundario);
    background: #FFF;
    border-radius: 10px;
    min-height: 100px;
}
body:not(.edit) .bck-flipbox-section {
    text-align: left;
    border-radius: 30px;
}
body:not(.edit) .front .bck-flipbox-title,
 body:not(.edit) .front .bck-flipbox-section {
    color: #fff;
    border: 1px solid #fff;
    width: 100%;
    padding: 20px;
    font-weight: bold;
    text-align: center;
}
body:not(.edit) .back .bck-flipbox-title,
 body:not(.edit) .back .bck-flipbox-section {
    color: #000;
    padding: 20px;
    text-align: center;
}
body:not(.edit)  .bck-flipbox-title,
 body:not(.edit) .bck-flipbox-section p {
    margin:0;
}
body:not(.edit) .bck-flipbox-face.back .bck-flipbox-content {
    border: 0;
}
/*----*/

/*Ajuste sangrado*/
/* OJO - El margin-left del bck-indent-1 coincide con el margin-left de las listas desordenadas 5 y 6 y Lista ordenada 08*/
.bck-indent-1 {
    margin-left: 30px !important;
}
.bck-indent-2 {
    margin-left: 60px  !important;
}
.bck-indent-3 {
    margin-left: 90px  !important;
}
/*---*/

/*Ajuste general listas */
/*Ajuste listas sin clase*/
 .cke_contents ol,
   .content ol {
    counter-reset: bck-li-counter;
}
.texto_curso ul,
 .texto_curso ol,
  .workspace:not(.multiple-choice,.matching,.ordenar,.clasificar,.test) ul li ul, 
  .workspace:not(.multiple-choice,.matching,.ordenar,.clasificar,.test) ul li ol, 
  .cke_contents ul, .cke_contents ol, .popover-content ul, .popover-content ol {
    margin: 15px 0 15px 0;
    padding: 0;
}
#actividad .texto_curso li,
 #actividad .workspace ul li li {
    position: relative;
    margin-bottom: 10px;
    margin-left: 0;
    font-size: var(--TextoGeneral);
    line-height: var(--LineHeightGen) !important;
}
/*---*/

/*Ajuste general listas con clase*/
.cke_contents ol.bck-ol,
  .content ol.bck-ol {
    counter-reset: bck-li-counter;
    margin: 15px 0 15px 0;
}
#actividad .content .texto_curso .bck-ul,
#actividad .content .cke_contents .bck-ul,
 #actividad .content .texto_curso .bck-ol,
 #actividad .content .cke_contents .bck-ol {
    padding: 0;
}
/*---*/

/*LISTAS DESORDENADAS*/
.texto_curso ul li {
	padding-left: 20px;
}
#actividad .content ul.bck-ul li {
    font-size: var(--TextoGeneral);
}
.texto_curso ul li:before,
.workspace ul li ul li:before,
.cke_contents ul li:before,
.preview ul li:before,
.classify-item ul li:before,
#actividad .workspace.multiple-choice .js-item ul li:before,
#actividad .workspace.matching .box ul li:before,
#actividad .workspace.ordenar .js-rank-item ul li:before {
	height: 6px;
	width: 6px;
	background-color: #333;
	color: #333;
	border-radius: 50%;
}
#actividad .content .texto_curso .bck-ul li::before,
#actividad .content .texto_curso ul li::before,
#actividad .content .workspace ul li ul li::before,
#actividad .content .workspace ul li .bck-ul li::before,
#actividad .content .cke_contents ul li .bck-ul li::before,
#actividad .popover-background.shown .popover-content>ul>li::before {
	content: "";
	height: 6px;
	width: 6px;
	background-color: #000;
	color: #000;
	-moz-border-radius: 50%;
	-webkit-border-radius: 50%;
	border-radius: 50%;
	position: absolute;
	margin-top: 10px;
	margin-left: -10px;
}

/*Lista desordenada 1*/
#actividad .content .texto_curso .bck-ul-1 li::before,
#actividad .content .cke_contents .bck-ul-1 li::before,
 #actividad .content .workspace ul li .bck-ul-1 li::before {
	background-color:#000;
	color: #000;
}

/*Lista desordenada 2*/
#actividad .content .texto_curso .bck-ul-2 li::before,
#actividad .content .cke_contents .bck-ul-2 li::before,
 #actividad .content .workspace ul li .bck-ul-2 li::before {
	background-color:#000;
	color: #000;
    margin-top: 13px;
    border-radius: 0;
    border-radius: 0;
    height: 2px;
}
/*Lista desordenada 3*/
#actividad .content .texto_curso .bck-ul-3 li::before,
#actividad .content .cke_contents .bck-ul-3 li::before,
 #actividad .content .workspace ul li .bck-ul-3 li::before {
	background-color:var(--colorppal);
	color: var(--colorppal);
}
/*Lista desordenada 4*/
#actividad .content .texto_curso .bck-ul-4 li::before,
#actividad .content .cke_contents .bck-ul-4 li::before,
 #actividad .content .workspace ul li .bck-ul-4 li::before {
	background-color:var(--colorsecundarioTexto);
	color: var(--colorsecundarioTexto);
}
/*Lista desordenada 5*/
#actividad .content .texto_curso .bck-ul-5 li::before,
#actividad .content .cke_contents .bck-ul-5 li::before,
 #actividad .content .workspace ul li .bck-ul-5 li::before {
	background-color:#000;
	color: #000;
}
#actividad .content .texto_curso .bck-ul-5 li,
#actividad .content .cke_contents .bck-ul-5 li,
 #actividad .content .workspace ul li .bck-ul-5 li {
    margin-left: 30px;
}
/*Lista desordenada 6*/
#actividad .content .texto_curso .bck-ul-6 li::before,
#actividad .content .cke_contents .bck-ul-6 li::before,
 #actividad .content .workspace ul li .bck-ul-6 li::before {
	background-color:#000;
	color: #000;
    margin-top: 13px;
    border-radius: 0;
    border-radius: 0;
    height: 2px;
}
#actividad .content .texto_curso .bck-ul-6 li,
#actividad .content .cke_contents .bck-ul-6 li,
 #actividad .content .workspace ul li .bck-ul-6 li {
    margin-left: 30px;
}
/*--*/


/*General ordenadas*/
#actividad .content .texto_curso .bck-ol li,
 #actividad .popover-content .bck-ol li,
  #actividad .content .workspace ul li .bck-ol li,
    #actividad .content .cke_contents .bck-ol li {
    list-style-type: none;
    counter-increment: bck-li-counter 1;
    position: relative;
    font-size: var(--TextoGeneral);
}

#actividad .content .texto_curso .bck-ol li:before,
 #actividad .popover-content .bck-ol li:before,
 #actividad .content .workspace ul li .bck-ol li:before {
	content: counter(bck-li-counter);
    position: relative;
    text-align: left;
    font-size: var(--TextoGeneral);
    font-family: 'Inter', sans-serif;
	margin-left: -10px; 
	left: 0;
	width: auto;
}

/*LISTA ORDENADA 1*/
#actividad .content .cke_contents .bck-ol-1 li,
 #actividad .content .cke_contents .bck-ol-1 li,
  #actividad .content .texto_curso .bck-ol-1 li,
   #actividad .popover-content .bck-ol-1 li,
    #actividad .content .workspace ul li .bck-ol-1 li,

    #actividad .content .cke_contents .bck-ol1 li,
 #actividad .content .cke_contents .bck-ol1 li,
  #actividad .content .texto_curso .bck-ol1 li,
   #actividad .popover-content .bck-ol1 li,
    #actividad .content .workspace ul li .bck-ol1 li {
    counter-increment: bck-li-counter;
    position: relative;
    z-index: 0;
    font-weight: normal;
    color: #000;
}

#actividad .content .cke_contents .bck-ol-1 li:before,
 #actividad .content .texto_curso .bck-ol-1 li:before,
  #actividad .popover-content .bck-ol-1 li:before,
   #actividad .content .workspace ul li .bck-ol-1 li:before,

   #actividad .content .cke_contents .bck-ol1 li:before,
 #actividad .content .texto_curso .bck-ol1 li:before,
  #actividad .popover-content .bck-ol1 li:before,
   #actividad .content .workspace ul li .bck-ol1 li:before {
    content: counter(bck-li-counter) ".";
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    position: absolute;
    color: inherit;
    font-size: var(--TextoGeneral);
    width: 28px;
    margin-top: 0px;
    left: -33px;
    top: 0px;
    margin-left: -1px;
    text-align: right;
}

/*Lista ordenada 2*/
#actividad .content .cke_contents .bck-ol-2 li,
#actividad .content .texto_curso .bck-ol-2 li,
 #actividad .popover-content .bck-ol-2 li,
  #actividad .content .workspace ul li .bck-ol-2 li {
    counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
}
#actividad .content .cke_contents ol.bck-ol-2 li:before,
#actividad .content .texto_curso ol.bck-ol-2 li:before,
 #actividad .popover-content ol.bck-ol-2 li:before,
  #actividad .content .workspace ul li ol.bck-ol-2 li:before {
    content: counter(bck-li-counter, lower-alpha) ")";
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    position: absolute;
    color: inherit;
    font-size: var(--TextoGeneral);
    width: 28px;
    margin-top: 0px;
    left: -33px;
    top: 0px;
    margin-left: -1px;
    text-align: right;
}

/*Lista ordenada 3*/
#actividad .content .cke_contents .bck-ol-3 li,
#actividad .content .texto_curso .bck-ol-3 li,
 #actividad .popover-content .bck-ol-3 li,
  #actividad .content .workspace ul li .bck-ol-3 li {
    counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
}
#actividad .content .cke_contents ol.bck-ol-3 li:before,
#actividad .content .texto_curso ol.bck-ol-3 li:before,
 #actividad .popover-content ol.bck-ol-3 li:before,
  #actividad .content .workspace ul li ol.bck-ol-3 li:before {
    content: counter(bck-li-counter, lower-alpha) ".";
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    position: absolute;
    color: inherit;
    font-size: var(--TextoGeneral);
    width: 28px;
    margin-top: 0px;
    left: -33px;
    top: 0px;
    margin-left: -1px;
    text-align: right;
}

/*Lista ordenada 4*/
#actividad .content .cke_contents .bck-ol-4 li,
#actividad .content .texto_curso .bck-ol-4 li,
 #actividad .popover-content .bck-ol-4 li,
  #actividad .content .workspace ul li .bck-ol-4 li {
    counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
    font-weight: 500;
}
#actividad .content .cke_contents ol.bck-ol-4 li:before,
#actividad .content .texto_curso ol.bck-ol-4 li:before,
 #actividad .popover-content ol.bck-ol-4 li:before,
  #actividad .content .workspace ul li ol.bck-ol-4 li:before {
    content: counter(bck-li-counter) ".";
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    position: absolute;
    color: inherit;
    font-size: var(--TextoGeneral);
    width: 28px;
    margin-top: 0px;
    left: -33px;
    top: 0px;
    margin-left: -1px;
    text-align: right;
}
/*Lista ordenada 5*/
#actividad .content .cke_contents .bck-ol-5 li,
#actividad .content .texto_curso .bck-ol-5 li,
 #actividad .popover-content .bck-ol-5 li,
  #actividad .content .workspace ul li .bck-ol-5 li {
    counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
}
#actividad .content .cke_contents ol.bck-ol-5 li:before,
#actividad .content .texto_curso ol.bck-ol-5 li:before,
 #actividad .popover-content ol.bck-ol-5 li:before,
  #actividad .content .workspace ul li ol.bck-ol-5 li:before {
    content: counter(bck-li-counter);
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    position: absolute;
    color: inherit;
    font-size: var(--TextoGeneral);
    width: 28px;
    margin-top: 0px;
    left: -39px;
    top: 0px;
    margin-left: -1px;
    text-align: right;
}
/*Lista ordenada 6*/
#actividad .content .cke_contents .bck-ol-6 li,
#actividad .content .texto_curso .bck-ol-6 li,
 #actividad .popover-content .bck-ol-6 li,
  #actividad .content .workspace ul li .bck-ol-6 li {
    counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
}
#actividad .content .cke_contents ol.bck-ol-6 li:before,
#actividad .content .texto_curso ol.bck-ol-6 li:before,
 #actividad .popover-content ol.bck-ol-6 li:before,
  #actividad .content .workspace ul li ol.bck-ol-6 li:before {
    content: counter(bck-li-counter);
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    position: absolute;
    color: var(--colorppal);
    font-size: var(--TextoGeneral);
    width: 28px;
    margin-top: 0px;
    left: -39px;
    top: 0px;
    margin-left: -1px;
    text-align: right;
}

/*Lista ordenada 7*/
#actividad .content .cke_contents .bck-ol-7 li,
#actividad .content .texto_curso .bck-ol-7 li,
 #actividad .popover-content .bck-ol-7 li,
  #actividad .content .workspace ul li .bck-ol-7 li {
    counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
}
#actividad .content .cke_contents ol.bck-ol-7 li:before,
#actividad .content .texto_curso ol.bck-ol-7 li:before,
 #actividad .popover-content ol.bck-ol-7 li:before,
  #actividad .content .workspace ul li ol.bck-ol-7 li:before {
    content: counter(bck-li-counter);
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    position: absolute;
    color: var(--colorsecundarioTexto);
    font-size: var(--TextoGeneral);
    width: 28px;
    margin-top: 0px;
    left: -39px;
    top: 0px;
    margin-left: -1px;
    text-align: right;
}
/*Lista ordenada 8*/
#actividad .content .cke_contents .bck-ol-8 li,
#actividad .content .texto_curso .bck-ol-8 li,
 #actividad .popover-content .bck-ol-8 li,
  #actividad .content .workspace ul li .bck-ol-8 li {
    counter-increment: bck-li-counter;
    padding-left: 0;
    position: relative;
    margin-left: 30px;
}
#actividad .content .cke_contents ol.bck-ol-8 li:before,
#actividad .content .texto_curso ol.bck-ol-8 li:before,
 #actividad .popover-content ol.bck-ol-8 li:before,
  #actividad .content .workspace ul li ol.bck-ol-8 li:before {
    content: counter(bck-li-counter, lower-alpha) ")";
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    position: absolute;
    color: inherit;
    font-size: var(--TextoGeneral);
    width: 28px;
    margin-top: 0px;
    left: -33px;
    top: 0px;
    margin-left: -1px;
    text-align: right;
}
/*---*/


/*CAJA POP-UP*/
.info-popover .popover-title:before,
.popover-template .popover-title:before {
	display:none;
}

.info-popover .popover-title,
.popover-template .popover-title {
    position: relative;
    background: none;
    color: #fff;
    font-size: var(--TextoGeneral);
    color: #000;
    border-bottom: 0;
    font-weight: bold;
    background-color: var(--colorppal);
    padding: 15px 20px 10px 15px;
}
.info-popover .popover-content, .popover-template .popover-content {
    display: block;
    background: #fff;
    padding: 10px 15px;
    font-size: 16px;
}
.close-popover {
    color: #000;
    top: 8px;
}
.info-template .info-title {
	color: #333;
}
.info-template .info-title.shown:before {
	display: none;
}


/*icono info*/
.fa-info:before {
    content: "i";
    font-weight: bold;
    font-family: monospace;
    font-size: 1.5rem;
    line-height: 5px;
    color: #000;
    border: 1px solid;
    border-radius: 50%;
    padding: 1px 6px;
    background-color: white
}

#actividad .info-button {
    display: block;
    width: 40px;
    height: 40px;
    margin: 0px;
    -webkit-box-shadow:  0 0 6px #5555553d;
    -moz-box-shadow: 0 0 6px #5555553d;
    box-shadow: 0 0 6px #5555553d;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: var(--colorppal);
    color: #1a171b;
    line-height: 38px;
	text-align: center;
	cursor: pointer;
}

/*Pop-up flotante*/
.info-template {
	position: fixed;
	top: 100px;
	right: 0;
	-webkit-transform: translateX(105%);
	-moz-transform: translateX(105%);
	-ms-transform: translateX(105%);
	-o-transform: translateX(105%);
	transform: translateX(105%);
	z-index: 1000;
	width: 135px;
	height: auto;
	-webkit-box-shadow: 0 0 2px #555;
	-moz-box-shadow: 0 0 2px #555;
	box-shadow: 0 0 2px #555;
	-webkit-border-radius: 5px 0 0 5px;
	-moz-border-radius: 5px 0 0 5px;
	border-radius: 5px 0 0 5px;
	background: #fff;
	padding: 15px 5px 0;
	-webkit-transition: all ease-in-out .5s;
	-o-transition: all ease-in-out .5s;
	-moz-transition: all ease-in-out .5s;
	transition: all ease-in-out .5s;
}
.info-template.shown {
    background: var(--colorppal);
    -moz-box-shadow: -3px 2px 7px #00000038;
    -webkit-box-shadow: -3px 2px 7px #00000038;
    box-shadow: -3px 2px 7px #00000038;
    width: auto;
    max-width: 180px;

}
.info-template .info-title.shown {
    margin: 5px 10px;
    color: #000;
    font-weight: bold;
    font-size: 14px;
    padding: 0 0 6px 0;
}
.info-template .fa-info:before {
    color: #000;
}


/*Palabras emergentes*/
.bck-tooltip {
    text-decoration: none;
    font-weight: bold;
}
.popover.top {
    margin-top: -10px;
    background-color: var(--colorppal);
    font-size: 14px;
    line-height: 19px;
    border: 0;
}
.popover-title {
    margin: 0;
    padding: 8px 14px;
    font-size: 14px;
    font-weight: bold;
    line-height: 18px;
    background-color: var(--colorppal);
    border-bottom: 0;
    border-radius: 5px 5px 0 0;
    color: #fff;
}
.popover-content {
    padding: 0px 14px 10px 14px;
    color: #fff;
}
.popover.top>.arrow:after {
    border-top-color: var(--colorppal);
}

/*TABS*/
body:not(.edit) .bck-tabs-box {
    background-color: #FFF;
	border: 0;
	-moz-box-shadow: 0 3px 7px #00000026;
	-webkit-box-shadow: 0 3px 7px #00000026;
	box-shadow: 0 3px 7px #00000026;
	margin: 15px;
}
.bck-tabtitles {
	background-color: #fff;
	-moz-transition: none;
	-webkit-transition: none;
	transition: none;
}
.bck-tabtitles:active,
 .bck-tabtitles:focus,
  .bck-tabtitles:hover,
   .bck-tabtitles:visited {
    color: var(--colorppal);
    background: white;
    border-bottom: 2px solid var(--colorppal);
}
body:not(.edit) .bck-tabcontents .div-contents {
    background-color: #F8F8F8;
}
body:not(.edit) .bck-tabs-box.vertical-tabs .div-contents {
	background-color: #F8F8F8;
}

/*-- ICONOS --*/
.item-container .icon:before {
    content: "";
    background-repeat: no-repeat;
    -webkit-background-size: auto 100%;
    -moz-background-size: auto 100%;
    -o-background-size: auto 100%;
    background-size: auto 100%;
    background-position: 50%;
    display: inline-block;
    vertical-align: middle;
    height: 30px;
    width: 30px;
    margin: 0 4px;
}

.item-container .icon-audio:before {
    background-image: url(images/icono_audio.png);
}
.item-container .icon-cooperativo:before {
    background-image: url(images/icono_cooperativo.png);
}
.item-container .icon-emocional:before {
    background-image: url(images/icono_emocional.png);
}
.item-container .icon-emprendimiento:before {
    background-image: url(images/icono_emprendimiento.png);
}
.item-container .icon-evaluacion:before {
    background-image: url(images/icono_evaluacion.png);
}
.item-container .icon-evaluacion_blanc:before {
    background-image: url(images/icono_evaluacion_blanc.png);
}
.item-container .icon-ludico:before {
    background-image: url(images/icono_ludico.png);
}
.item-container .icon-ods:before {
    background-image: url(images/icono_ods.png);
}
.item-container .icon-pensamiento:before {
    background-image: url(images/icono_pensamiento.png);
}
.item-container .icon-pl:before {
    background-image: url(images/icono_pl.png);
}
.item-container .icon-tic:before {
    background-image: url(images/icono_tic.png);
}
.item-container .icon-video:before {
    background-image: url(images/icono_video.png);
}



/*-----*/

/*Lupa para imágenes*/
body:not(.edit) #actividad a.zoom_flag_img {
    background-color: var(--colortrans);
    border-radius: 0px 5px 0px 5px;
    top: 0;
    right: 0;
}

/*Ajuste en imágenes*/
.bck-i-fullscreen-wrapper {
    padding: 0;
}
#actividad .content img {
    margin-top: 0;
}
/*

/*Ajustes video*/
.video.video-js .vjs-big-play-button {
    font-size: 70px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    line-height: 1.6em;
    color: var(--colorppal);
    border-color: var(--colorppal);
}
.video-js {
	background-color: #000;
    border-radius: 5px 5px 0 0;
}
body.view-mode .bck-subtitles {
    display: block !important;
}
.bck-subtitles {
    background: var(--colorppal);
    padding: 5px;
    text-align: center;
    color: #fff;
    border-radius: 0 0 5px 5px;
}
.video-js .vjs-progress-holder .vjs-play-progress {
    background-color: var(--colorppal);
}
.bck-video-container2.center:not(.external-url-player) {
    margin: 0 auto 15px;  
}



/*Barra de separación (HR)*/
hr {
    margin: 20px 0;
    border-top-color: var(--colorppal);
}

/*--*/
/*AJUSTES ACTIVIDADES*/
/*inputs respuestas*/
.texto_curso input {
     margin: 5px 0px;
}
.slide_main input {
    color: #000;
    border-radius: 3px;
    height: inherit;
    min-height: 29px;
    border: 1px solid var(--colorppal);
    box-shadow: none;
    background-color: white;
}
    /*Ajuste de los inputs dentro de GRIDS para alinear las columnas*/
    .slide_main .js--row input:last-of-type {
        margin: 0;
        height: inherit;
    }

/*Generales Acierto / Fallo*/
.slide_main input[disabled].respuesta_ok,
 .slide_main input[readonly].respuesta_ok,
 fieldset[disabled] .slide_main input.respuesta_ok,
.slide_main input.respuesta_ok {
    border-color: #57e900;
    background: #D1F3BD;
}

.slide_main input[disabled].respuesta_ko,
 .slide_main input[readonly].respuesta_ko,
 fieldset[disabled] .slide_main input.respuesta_ko,
.slide_main input.respuesta_ko {
    border-color: #FF3626;
    background: #ffddda;
}

/*Respuesta múltiple*/
#actividad .workspace.multiple-choice .opcion {
    border-radius: 5px;
    -moz-box-shadow: 0px 4px 5px #00000021;
    -webkit-box-shadow: 0px 4px 5px #00000021;
    box-shadow: 0px 4px 5px #00000021;
    border: 1px solid var(--colorppal);
}
#actividad .workspace.multiple-choice .opcion figure {
    margin: 0 55px;
}
#actividad .workspace.multiple-choice .opcion.respuesta_over {
    background-color: var(--colortrans);
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
}
#actividad .workspace.multiple-choice .opcion.respuesta_checked {
    background-color: var(--colorppal);
    border-color: var(--colorppal);
    font-weight: bold;
}
/*Rellenar espacios*/

.fillblanks-draggable-wrapper .response {
    min-width: 80px;
    -moz-box-shadow: 0px 5px 4px var(--colortrans);
    -webkit-box-shadow: 0px 5px 4px var(--colortrans);
    box-shadow: 0px 5px 4px var(--colortrans);
    border: 1px solid var(--colorppal);
    color: #000;
    border-radius: 0;
}
.fillblanks-draggable-wrapper .response p {
    padding: 9px 10px;
    font-size: var(--TextoGeneral);
}
.slide_main input[disabled], 
.slide_main input[readonly],
 fieldset[disabled] .slide_main input {
    background-color: var(--colortrans);
    border-radius: 5px;
    border: 0;
    color: #000;
}
.slide_main input:focus,
 .slide_main .form-control:focus {
    -webkit-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    -moz-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    border-color: var(--colorppal);
}
.fillblanks-draggable .drag-over {
    border-top-color: var(--colortrans);
    border-right-color: var(--colortrans);
    border-bottom-color: var(--colortrans);
    border-left-color: var(--colortrans);
    -webkit-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    -moz-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);	  
}
/*Arrastrar imagen a espacios*/
.fillblankimages-draggable .drag-over {
    -webkit-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    -moz-box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);
    box-shadow: 0px 1px 1px rgb(0 0 0 / 8%) inset, 1px 3px 7px var(--colortrans);	
}
/*Relacionar*/
#actividad .workspace.matching .opcion {
    -moz-box-shadow: 1px 3px 5px #0000001a;
    -webkit-box-shadow: 1px 3px 5px #0000001a;
    box-shadow: 1px 3px 5px #0000001a;
    border: 1px solid var(--colorppal);
    padding: 0;
}
/*Test*/

/*Calculo*/
#actividad .workspace.calculo table {
    border: 0;
}

/*Ordenar*/
#actividad .workspace.ordenar .js-rank-item {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    -moz-box-shadow: 1px 4px 7px 0px #00000029;
    -webkit-box-shadow: 1px 4px 7px 0px #00000029;
    box-shadow: 1px 4px 7px 0px #00000029;
    border: 1px solid #000;
    margin-bottom: 15px;
}
#actividad .workspace.ordenar li:hover {
    -moz-box-shadow: 2px 3px 6px var(--colortrans);
    -webkit-box-shadow: 2px 3px 6px var(--colortrans);
    box-shadow: 2px 3px 6px var(--colortrans);
    border: 1px solid var(--colorppal);	
}
/*Verdadero y falso*/

/*Fill in the blanks*/
.fillblanks-draggable-wrapper {
	text-align: center;
	margin-bottom: 20px;
	margin-left: 0;
}
/*Arrastrar imagen a imagen*/
.slide_main .fillblankimages-draggable .img-input-container {
    border: 2px dotted;
    border-color: #E5E5E5;
}
.fillblankimages-draggable-wrapper .response {
    border: 2px dotted #E5E5E5;
}
.fillblankimages-draggable-wrapper .response.respuesta_over {
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border-color: var(--colorppal);
}
/*clasificar*/

#actividad .workspace.clasificar .clasificar_lista .classify-item {
    background: #fff;
    color: #000;
    padding: 8px;
    margin: 0 5px;
    -moz-box-shadow: 1px 3px 4px var(--colortrans);
    -webkit-box-shadow: 1px 3px 4px var(--colortrans);
    box-shadow: 1px 3px 4px var(--colortrans);
    border: 1px solid var(--colorppal);
    margin-bottom: 10px;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
}
#actividad .workspace.clasificar .clasificar_lista .classify-item:hover {
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border-color: var(--colorppal);
}
#actividad .workspace.clasificar .clasificar_conjuntos .classify-item {
    background-color: #FFF;
    width: 100%;
    margin: 0 auto;
    padding: 5px 20px;
    color: #000;
    box-shadow: none;
    border: 0;
}
#actividad .workspace.clasificar .clasificar_conjuntos .conjunto .group-box {
    background: #fff;
    border: 2px dotted #E5E5E5;
    padding: 8px;
}
#actividad .workspace.clasificar .clasificar_conjuntos .group-name-top {
	border-bottom: 0;
}
/* Marcar palabras */
#actividad .markwords-word {
    -webkit-transition: padding 0.2s ease-in-out;
    -moz-transition: padding 0.2s ease-in-out;
    transition: padding 0.2s ease-in-out;
}

#actividad .markwords-word:hover {
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border: 1px solid var(--colortrans);
    padding: 0 5px;
}

#actividad .markword-active {
    border-radius: 0px !important;
    padding: 0 5px !important;
    border: 2px solid var(--colorppal) !important;
}

/*Señalar palabras*/
body #actividad .workspace.chooseblanks .inline-answer a {
    color: #000;
}
#actividad .inline-answer a,
 body:not(.edit) #actividad .inline-answer a:not(.cke_button):not(.zoom_flag_img) {
    color: #000;
}
#actividad .inline-answer a.selected,
 body:not(.edit) #actividad .inline-answer a.selected:not(.cke_button):not(.zoom_flag_img) {
    color: var(--colorppal);
}

#actividad .workspace.chooseblanks select {
    border-bottom: 1px solid #CCC;
    -moz-box-shadow: 1px 3px 5px #00000040;
    -webkit-box-shadow: 1px 3px 5px #00000040;
    box-shadow: 1px 3px 5px #00000040;
    border: 1px solid var(--colorppal);
    color: #000;
    padding: 3px 7px;
    margin: 3px 0px;
}
#actividad .workspace.chooseblanks select:hover {
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border-color: var(--colorppal);
}
#actividad .workspace.chooseblanks .inline-answer a {
    margin: -7px 2px 2px 2px;
    background-color: #FFF;
    -moz-box-shadow: 1px 3px 4px #00000021;
    -webkit-box-shadow: 1px 3px 4px #00000021;
    box-shadow: 1px 3px 4px #00000021;
	border: 1px solid #00000021;
	font-weight: normal !important;
}
#actividad .workspace.chooseblanks .inline-answer a:hover {
    background-color: #FFF;
    color: var(--colorppal);
    -moz-box-shadow: 0 4px 7px var(--colortrans);
    -webkit-box-shadow: 0 4px 7px var(--colortrans);
    box-shadow: 0 4px 7px var(--colortrans);
    border-color: var(--colorppal);
}
#actividad .workspace.chooseblanks .inline-answer a.selected:not(.respuesta_ok):not(.respuesta_ko):not(.solucion) {
    background-color: #FFF;
    border-bottom: 2px solid;
}
#actividad a,
 body:not(.edit) #actividad a:not(.cke_button):not(.zoom_flag_img) {
    color: var(--colorppal);
    background-color: transparent;
}
/*tipo test*/




#actividad .workspace.test .respuesta_ko {
    background-color: #ffe1e4;
    border-bottom: 2px solid #ef0c24;
}
#actividad .workspace.test .respuesta_ok {
    background-color: #e7ffd1;
    border-bottom: 2px solid #74d320;
}
/*parejas cartas*/
#actividad .workspace.memory .flip-container p {
	font-size: 1.5rem;
}


/*botonera general*/
#actividad .class_slide .review {
	margin-top: 20px;
	text-align: center;
	margin-left: 0px;
}

.btn-danger,
.btn-danger[disabled] {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    color: #000;
    background: #E0E0E0;
    font-weight: 700;
    padding: 10px 15px;
    font-size: 16px;
}

.btn-primary,
 .btn-primary.disabled,
 .btn-primary.disabled:focus,
.btn-primary.disabled:hover {
    background-color: #E0E0E0;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    border: 0;
    color: #000;
    padding: 10px 15px;
    font-size: 16px;
    font-weight: bold;
}

.btn-danger,.btn-danger[disabled] {
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    color: #000;
    background: #E0E0E0;
	font-weight: 700;
}
.btn-danger:hover,
 .btn-danger:focus,
  .btn-danger:active,
   .btn-danger.active,
    .open .dropdown-toggle.btn-danger {
        color: #000;
        background-color: var(--colorppal);
}

.btn-primary.active,
.btn-primary:not([disabled]):active,
.btn-primary:not([disabled]):focus,
.btn-primary:not([disabled]):hover,
.open .dropdown-toggle.btn-primary {
    background-color: var(--colorppal);
    color: #000;
}
#actividad .content .review .attemps span {
    background-color: #E0E0E0;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    color: #000;
    font-weight: normal;
    font-size: 16px;
}
.btn-primary[disabled],
.btn-primary[disabled]:focus {
    color: #000;
    background-color: #E5E5E5;
    border-color: #E5E5E5;
}
.btn-next,.btn-next.disabled,
.btn-next[disabled],
.btn-solution,
.btn-solution.disabled,
.btn-solution[disabled] {
    color: #005472;
    background-color: #fff;
    border: 2px solid #00bdff;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 25px;
    font-weight: 700;
}
.btn-next:active,
.btn-next:focus,
.btn-next:hover,
.btn-solution:active,
.btn-solution:focus,
.btn-solution:hover,
.open .dropdown-toggle.btn-solution {
    color: #fff;
    background-color: #00bdff;
    border-color: transparent;
}

/* modo correcion/revision */
.info-alumno .nombre-alumno {
	max-width: 189px;
}

/**TABLA**/
table,
.bck-table {
	border: 1px solid #000;
}

table td,
.bck-table td {
	border-color: #000;
    font-size: var(--TextoGeneral);
    padding: 10px;
}
.bck-table-1 {
	border-color: var(--colorppal);
}
.bck-table-1 td {
	border-color: var(--colorppal);
    font-size: var(--TextoGeneral);
}

.bck-table-2 {
	border-color: var(--GrisAnaya);
}
.bck-table-2 td {
	border-color: var(--GrisAnaya);
    font-size: var(--TextoGeneral);
}

.bck-table-3 {
    font-family: 'Montserrat', sans-serif;
    border: 1px dashed #8b8b8b;
}
.bck-table-3 td {
    border: 1px dashed #8b8b8b;
}

td,
th {
	padding-left: 10px;
}

/*Celda*/
table td.bck-td-1 {
    color: #000;
    background-color: #fff;
    text-align: center;
    font-size: var(--TextoGeneral);
}
table td.bck-td-2 {
    color: #000;
    background-color: var(--colorppal);
    text-align: center;
    font-size: var(--TextoGeneral);
}
table td.bck-td-3 {
    color: #000;
    background-color: var(--colorsecundario);
    text-align: center;
    font-size: var(--TextoGeneral);
}
table td.bck-td-4 {
    color: #000;
    background-color: #FAFE4C;
    text-align: center;
    font-size: var(--TextoGeneral);
}
table td.bck-td-5 {
    color: #000;
    background-color: #B3FB9A;
    text-align: center;
    font-size: var(--TextoGeneral);
}
table td.bck-td-6 {
    color: #000;
    background-color: #F4F6EE;
    text-align: center;
    font-size: var(--TextoGeneral);
}
table td.bck-td-7 {
    color: #000;
    background-color: #EBEBEB;
    text-align: center;
    font-size: var(--TextoGeneral);
}
table td.bck-td-8 {
    color: #000;
    background-color: #F9D3E4;
    text-align: center;
    font-size: var(--TextoGeneral);
}
table td.bck-td-9 {
    text-align: left;
}
table td.bck-td-10 {
    text-align: right;
}

/*SECCIONES*/
/*fondotransparente*/
body:not(.edit) #actividad .carousel-inner .fondotransparente .item-container.aux-bckg.is-top .class_slide {
    background: none;
}

/*MEDIA QUERIES */
@media screen and (max-width: 768px) {
#actividad .carousel-inner .class_slide {
    padding: 40px 40px 0px;
}
}

@media only screen 
and (max-width : 480px) {

:root {
--TextoGeneral: 18px;
--LineHeightGen: 25px;
--TextoSecundario: 16px;
--LineHeightSecundario: 22px;
}  
#actividad .content .header .title h3 {
    font-size: 40px;
} 
.bck-title-1 {
    font-size: 40px;
}
.bck-title-2{
    font-size: 30px;
} 
.bck-title-3 {
    font-size: 24px;
}

.texto_curso p {
    line-height: 2.8rem !important;
}
#actividad .texto_curso {
    font-size: var(--TextoGeneral);
    line-height: var(--LineHeightGen) !important;
}
#actividad .pregunta .texto_curso {
    font-size: var(--TextoGeneral);
}
#actividad textarea {
    font-size: var(--TextoGeneral);
}
#actividad .class_slide .review {
    text-align: center;
}
.puzzle-wrapper {
    width: 100%;
    margin-bottom: 35px;
}
#actividad .workspace.matching .opcion {
    height: auto;
}	
#actividad .workspace.test .respuestas li {
    width: 70%;
}	
}
