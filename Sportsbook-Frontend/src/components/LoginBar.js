import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import LoginPage from './LoginPage'
import SignupPage from './SignupPage'
const LoginBar = () => {
    return (
    <Router>
        <div className="login-bar">
            <Link to='/signup' className="signup-button" >
                <button>Sign Up</button>
            </Link>
            <Link to='/login' className="login-button">
                <button>Log In</button>
            </Link>
        </div>
        <Switch>
            <Route path="/signup">
                <SignupPage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
        </Switch>
    </Router>
    )
}

export default LoginBar