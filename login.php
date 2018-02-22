<?php

  // Allow the config
  define('__CONFIG__', true);
  // Require the config
  require_once "inc/config.php";

  Page::ForceDashboard();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="/Resources/bootstrap.min.css">
  <link rel="shortcut icon" href="/assets/brand/favicon.ico"/>
  <title>CollegeFork, Fork your college. The best place for school research</title>
  <link rel="stylesheet" href="login.css">
  <meta name="robots" content="follow">
  <base href="/" />
</head>

<body class="sigin-body">
    <!--nav bar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="https://collegefork.com">
          <img src="/assets/brand/collegefork.svg" width="30" height="30" class="d-inline-block align-top" alt="">
          CollegeFork
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="https://collegefork.com">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://collegefork.com/match">College Match</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://collegefork.com/dive">College Dive In</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Experts' Advice
        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="https://collegefork.com/application">Application</a>
                        <a class="dropdown-item" href="https://collegefork.com/test">Standard Test</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="https://collegefork.com/summerschool">Summer School Special Section</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://blog.collegefork.com">Forum</a>
                </li>
            </ul>
        </div>
    </nav>

  <div class="container signin-container">
    <div class="row">
      <div class="col"></div>
      <div class="col-sm-12 col-md-8">
        <div class="card signin-card">
          <div class="card-block">
            <img src="assets/brand/collegefork.svg" class="img-fluid signin-img">
            <form class="sigin-form js-login">
              <div class="form-group">
                <input type="email" class="form-control" id="emailInput" required="required" placeholder="example@example.com">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="passwordInput" required="required" placeholder="Password">
              </div>
              <div class="alert alert-danger js-error" style='display: none;'></div>
              <button class="btn signin-btn btn-lg btn-primary" type="submit">Sign In</button>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox"> Remember me<a href="https://collegefork.com/help"> Need Help?</a></label>
              </div>
            </form>
          </div>
        </div>
        <a href="register.php" class="create-new-account">Create New Account</a>
      </div>
      <div class="col"></div>
    </div>

  </div>

<?php require_once "inc/footer.php"; ?>

</body>

</html>
