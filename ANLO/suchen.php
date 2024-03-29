<?php
include("wdw_suche/search_config.php");
?>

<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet"/>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

    <!-- AOS Plugin -->
    <link rel="stylesheet" href="../aos plugin/css/styles.css" />
    <link rel="stylesheet" href="../aos plugin/css/aos.css" />

    <!-- CSS Datei -->
    <link rel="stylesheet" href="../css/style_index.css" />

    <!-- JavaScript Datei -->
    <link rel="text/javascript" href="../js/Skripte.js">

    <title>Suchergebnisse | ANLO</title>
  </head>
  <body id="bodySuche">

    <!-- Navigationsleiste -->
    <nav class="mask-navbar navbar navbar-expand-lg navbar-light fixed-top light schatten-navbar" z-index="100">
        <a class="navbar-brand" href="index.html">
          <img src="img/Antifalogo.svg" width="50" height="50" alt="">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarMain">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0 ">
                <li class="nav-item active">
                    <a class="nav-link" href="aktuelles.html">Aktuelles</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="projekte.html">Projekte</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#leistungen">Veranstaltungen</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#kontakt">Chronik</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#kontakt">Kontakt</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#faq">Spende</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#modalImpressum" data-toggle= "modal">Impressum</a>
                </li>
            </ul>
            <form id="search" method="get" action="suchen.php" class="form-inline">
              <label for="suchbegriff"></label>
              <input name="q" class="form-control mb-0 mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-light" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
        </div>
    </nav>

    <div class="mask-svg-unten-rot">
      <div class="container">
        <div class="row text-center align-items-center">
          <div class="col-sm-12">
            <div id="output"><?php include("wdw_suche/search.php");?></div>
          </div>
        </div>
      </div>
    </div>




    <script src="wdw_suche/wdw_suche.js" defer></script>

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- AOS-Plugin Initialisierung -->
    <script src="../aos plugin/js/aos.js"></script>
    <script>
      AOS.init({
        easing: "ease-in-out-sin",
        duration: "750"
      });
    </script>
  </body>
</html>
