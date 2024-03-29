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
    <title>XinchenLiu's CollegeFork Dashboard</title>

    <base href="/" />
		<style>
			body {
				background-color: #EEE8FB;
			}
			.jumbotron {
				background-color: #EEE8FB;
			}
			.jumbotron.white {
				background-color: white;
			}
			.avatar {
				position: absolute;
				right: 2em;
				top: 10px;
				width: 200px;
			}
			.welcome {
				min-height: 220px;
			}
			.card {
				margin-bottom: 20px;
			}
			@media (max-width:703px) {
				.avatar {
					position: static;
					display: block;
				}
			}
		</style>
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
            <ul class="nav justify-content-end account-logo">
                <li class="nav-item">
                    <a class="navbar-brand" href="login.php">
                     <img src="/assets/brand/XinchenLiu.png" width="30" height="30" class="d-inline-block align-top" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </nav>

  	<div class="jumbotron">
			<a class="btn btn-primary float-right" href="/logout.php">Logout</a>
  		<h1 class="display-4">XinchenLiu's Dashboard</h1>
			<div class="card welcome">
				<div class="card-body">
					<div class="card-title">
						<h1>Welcome, XinchenLiu!</h1>
					</div>
      		<p class="lead">Hello <?php echo $User->email; ?>, you registered at <?php echo $User->reg_time; ?></p>
					<img class="avatar" src="assets/brand/XinchenLiu.png" alt="user avatar">
				</div>
			</div>
			<div class="card">
				<div class="card-body">
					<nav>
					  <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
					    <a class="nav-item nav-link" id="nav-home-tab" data-toggle="tab" href="#match" role="tab" aria-controls="nav-home" aria-selected="true">My College Match</a>
					    <a class="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#ranking" role="tab" aria-controls="nav-profile" aria-selected="false">My College Ranking</a>
					    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#list" role="tab" aria-controls="nav-contact" aria-selected="false">My College List</a>
					  </div>
					</nav>
					<div class="tab-content" id="nav-tabContent">
					  <div class="tab-pane fade" id="match" role="tabpanel" aria-labelledby="nav-home-tab">
							<div class="jumbotron white">
								<h1 class="display-4">Here are some colleges we've picked for you</h1>
								<br>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/Massachusetts-Institute-of-Technology">Massachusetts Institute of Technology</a></p>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/Duke-University">Duke University</a></p>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/Yale-University">Yale University</a></p>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/University-of-North-Carolina-Chapel-Hill">University of North Carolina Chapel Hill</a></p>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/University-of-California-Berkeley">University of California Berkeley</a></p>
									<hr class="my-4">
									<a class="btn btn-primary" href="https://collegefork.com/match/test.html">Redo College Match</a>
							</div>
						</div>
					  <div class="tab-pane fade show active" id="ranking" role="tabpanel" aria-labelledby="nav-profile-tab">
						  <div class="jumbotron white">
								<h1 class="display-4">XinchenLiu's College Ranking</h1>
								<img width="500px"src="assets/features/slider.png">
								<ol>
									<li><p class="lead"><a href="https://collegefork.com/dive/colleges/Massachusetts-Institute-of-Technology">Massachusetts Institute of Technology</a></p></li>
									<li><p class="lead"><a href="https://collegefork.com/dive/colleges/Harvard-University">Harvard University</a></p></li>
									<li><p class="lead"><a href="https://collegefork.com/dive/colleges/University-of-Chicago">University of Chicago</a></p></li>
									<li><p class="lead"><a href="https://collegefork.com/dive/colleges/Stanford-University">Stanford University</a></p></li>
									<li><p class="lead"><a href="https://collegefork.com/dive/colleges/Yale-University">Yale University</a></p></li>
									<li><p class="lead"><a href="https://collegefork.com/dive/colleges/University-of-Pennsylvania">University of Pennsylvania</a></p></li>
								</ol>
								<a class="btn btn-primary" href="https://collegefork.com/match/filter.html">Load the full list</a>
								<a class="btn btn-primary" href="https://collegefork.com/match/filter.html">Redo College Filter</a>
							</div>
						</div>
					  <div class="tab-pane fade" id="link" role="tabpanel" aria-labelledby="nav-contact-tab">
							<div class="jumbotron white">
								<h1 class="display-4">XinchenLiu's College List</h1>
								<br>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/Massachusetts-Institute-of-Technology">Massachusetts Institute of Technology</a></p>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/Duke-University">Duke University</a></p>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/Yale-University">Yale University</a></p>
							  <p class="lead"><a href="https://collegefork.com/dive/colleges/Harvard-University">Harvard University</a></p>
							  <p class="lead"><a href="https://collegefork.com/dive/colleges/University-of-Chicago">University of Chicago</a></p>
							  <p class="lead"><a href="https://collegefork.com/dive/colleges/Stanford-University">Stanford University</a></p>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/University-of-North-Carolina-Chapel-Hill">University of North Carolina Chapel Hill</a></p>
								<p class="lead"><a href="https://collegefork.com/dive/colleges/University-of-California-Berkeley">University of California Berkeley</a></p>
							</div>
						</div>
					</div>
				</div>
			<div>
		</div>


  	<?php require_once "inc/footer.php"; ?>
		<script src="Resources/jquery.min.js"></script>
		<script src="Resources/popper.min.js"></script>
		<script src="Resources/bootstrap.min.js"></script>
  </body>
</html>
