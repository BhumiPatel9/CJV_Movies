import React from 'react'

const NavigationBar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a href="#" class="navbar-brand">Brand<b>Name</b></a>  		
	<button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span class="navbar-toggler-icon"></span>
	</button>
	
	<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
		<div class="navbar-nav">
			<a href="#" class="nav-item nav-link">Home</a>
			<a href="#" class="nav-item nav-link">About</a>			
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Services</a>
				<div class="dropdown-menu">					
					<a href="#" class="dropdown-item">Web Design</a>
					<a href="#" class="dropdown-item">Web Development</a>
					<a href="#" class="dropdown-item">Graphic Design</a>
					<a href="#" class="dropdown-item">Digital Marketing</a>
                </div>
            </div>
			<a href="#" class="nav-item nav-link active">Pricing</a>
			<a href="#" class="nav-item nav-link">Blog</a>
			<a href="#" class="nav-item nav-link">Contact</a>
		</div>
		<form class="navbar-form form-inline">
			<div class="input-group search-box">								
				<input type="text" id="search" class="form-control" placeholder="Search here..."/>
				<div class="input-group-append">
					<span class="input-group-text">
						<i class="material-icons">&#xE8B6;</i>
					</span>
				</div>
			</div>
		</form>
		<div class="navbar-nav ml-auto action-buttons">
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle mr-4">Login</a>
                <div class="dropdown-menu action-form">
					<form action="/examples/actions/confirmation.php" method="post">
						<p class="hint-text">Sign in with your social media account</p>
						<div class="form-group social-btn clearfix">
							<a href="#" class="btn btn-secondary facebook-btn float-left"><i class="fa fa-facebook"></i> Facebook</a>
							<a href="#" class="btn btn-secondary twitter-btn float-right"><i class="fa fa-twitter"></i> Twitter</a>
						</div>
						<div class="or-seperator"><b>or</b></div>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Username" required="required"/>
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Password" required="required"/>
						</div>
						<input type="submit" class="btn btn-primary btn-block" value="Login"/>
						<div class="text-center mt-2">
							<a href="#">Forgot Your password?</a>
						</div>
					</form>
                </div>
			</div>
			<div class="nav-item dropdown">
				<a href="#" data-toggle="dropdown" class="btn btn-primary dropdown-toggle sign-up-btn">Sign up</a>
                <div class="dropdown-menu action-form">
					<form action="/examples/actions/confirmation.php" method="post">
						<p class="hint-text">Fill in this form to create your account!</p>
						<div class="form-group">
							<input type="text" class="form-control" placeholder="Username" required="required"/>
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Password" required="required"/>
						</div>
						<div class="form-group">
							<input type="password" class="form-control" placeholder="Confirm Password" required="required"/>
						</div>
						<div class="form-group">
							<label class="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms &amp; Conditions</a></label>
						</div>
						<input type="submit" class="btn btn-primary btn-block" value="Sign up"/>
					</form>
				</div>
			</div>
        </div>
	</div>
    
</nav>
        
    );
}

export default NavigationBar