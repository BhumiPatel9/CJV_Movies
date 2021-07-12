import React from 'react';


const NavBar = () => {
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
            <div class="container">


                <a class="navbar-brand" href="#" target="_blank">
                    <strong>VideoFlix</strong>
                </a>


                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav nav-flex-icons">
                        <li class="nav-item">
                            <a href="#" class="nav-link" target="_blank">
                                <i class="fa fa-facebook"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link" target="_blank">
                                <i class="fa fa-twitter"></i>
                            </a>
                        </li>

                        <div class="navbar-nav ml-auto action-buttons">
                            <div class="nav-item dropdown">
                                <a href="#" data-toggle="dropdown" class="nav-link dropdown-toggle mr-4">Login</a>
                                <div class="dropdown-menu action-form">
                                    <form method="post">
        
                                        
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Username" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password" required="required" />
                                        </div>
                                        <input type="submit" class="btn btn-primary btn-block" value="Login" />
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
                                            <input type="text" class="form-control" placeholder="Username" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms &amp; Conditions</a></label>
                                        </div>
                                        <input type="submit" class="btn btn-primary btn-block" value="Sign up" />
                                    </form>
                                </div>
                            </div>
                        </div>

                    </ul>

                </div>

            </div>
        </nav>

    );
}

export default NavBar;


