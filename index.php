<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wrestler Name Generator</title>
  <link rel="stylesheet" href="assets/css/main.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-EMQ96JCJC6"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-EMQ96JCJC6');
  </script>
  <script data-ad-client="ca-pub-8796434703832284" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>

<body>
  <header>
    <nav class="nav">
      <a class="nav-link" href="/"><img src="assets/img/logo.png" alt="Wrestler Name Logo"></a>
    </nav>
  </header>
  <main>
    <div class="jumbotron">
      <h1 class="display-4">Wrestler Generator</h1>
      <p class="lead">Quick and easy tool to generate a wrestler name.</p>
      <hr class="my-4">
      <p>CLick below to generate your random wrestler name.</p>
      <a class="btn btn-primary btn-lg" id="generate" role="button">Generate Wrestler</a>
    </div>
    <div class="card mb-3 mx-auto" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="assets/img/ring.png" class="card-img p-2" alt="wrestler name">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Name: <span id="wrestlerName"></span></h5>
            <p class="card-text">Finisher: <span id="wrestlerFinish"></span></p>
            <p class="card-text">Style: <span id="wrestlerStyle"></span></p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="text-center">
    <script src="assets/js/main.js">

    </script>
    &#169; Copyright Clark Brettell 2021
  </footer>
</body>

</html>