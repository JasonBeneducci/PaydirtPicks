import React from 'react'
import {connect} from 'react-redux'
// uses React Router to establish routes in the navbar
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NflPickem from './NflPickem'
import About from './About'
import AccountBalance from './AccountBalance'
import TopLogo from './TopLogo'
import LeaderboardsContainer from '../containers/LeaderboardsContainer';

const NavBar = (props) => {
    return (
        <>
    <TopLogo />
    <Router>
        <div className="navbar">
            <Link to='/nflpickem' style={{ textDecoration: 'none', color: 'white'}}>
                <div className="navbar-element">NFL Pickem</div>
            </Link>
            <Link to='/leaderboards' style={{ textDecoration: 'none', color: 'white' }}>
                <div className="navbar-element">Leaderboards</div>
            </Link>
            <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>
                <div className="navbar-element">About</div>
            </Link>
            <Link to='/balance' style={{ textDecoration: 'none', color: 'lime' }}>
                <div className="navbar-balance-positive">User's Balance: ${props.balance} </div>
            </Link>
        </div>
            <Switch>
                <Route path="/nflpickem">
                    <NflPickem />
                </Route>
                <Route path="/leaderboards">
                    <LeaderboardsContainer/>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/balance">
                    <AccountBalance/>
                </Route>
            </Switch>
    </Router>
    </>
    )
}

const msp = (state) => {
    return {
        balance: state.balance
    }
}

export default connect(msp)(NavBar)