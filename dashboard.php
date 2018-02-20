<?php 

	// Allow the config
	define('__CONFIG__', true);
	// Require the config
	require_once "inc/config.php"; 

	Page::ForceLogin();

  $User = new User($_SESSION['user_id']);

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="follow">
    <link rel="stylesheet" href="/Resources/bootstrap.min.css">
    <link rel="shortcut icon" href="/assets/brand/favicon.ico"/>
    <title>CollegeFork Dashboard</title>

    <base href="/" />
  
  </head>

  <body>
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
                    <a class="nav-link dropdown-toggle" href="https://blog.collegefork.com" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul class="nav justify-content-end account-logo">
                <li class="nav-item">
                    <a class="navbar-brand" href="login.php">
                     <img src="/assets/brand/account.png" width="30" height="30" class="d-inline-block align-top" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </nav>

  	<div class="jumbotron">
  		<h1 class="display-4">Dashboard</h1>
      <p class="lead">Hello <?php echo $User->email; ?>, you registered at <?php echo $User->reg_time; ?></p>
      <p><a href="/logout.php">Logout</a></p>
  	</div>

  	<?php require_once "inc/footer.php"; ?> 
  </body>
</html>
