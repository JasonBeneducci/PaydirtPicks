import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NflPickem from './NflPickem'
import Leaderboards from './Leaderboards'
import History from './History'
import AccountBalance from './AccountBalance'
import TopLogo from './TopLogo'

const NavBar = () => {
    return (
        <>
    <TopLogo />
    <Router>
        <div className="navbar">
            <Link to='/nflpickem'>
                <div className="navbar-element">NFL Pickem</div>
            </Link>
            <Link to='/leaderboards'>
                <div className="navbar-element">Leaderboards</div>
            </Link>
            <Link to='/history'>
                <div className="navbar-element">History</div>
            </Link>
            <Link to='/balance' className="navbar-balance-positive">
                <div>[LoggedinUser's] Balance: $100</div>
            {/* Write a conditional in here to check if the users balance is greater than 0 it should be className="navbar-balance-positive" */}
            </Link>
        </div>
                {/* <Jackpot /> */}
                <Switch>
                    <Route path="/nflpickem">
                        <NflPickem />
                    </Route>
                    <Route path="/leaderboards">
                        <Leaderboards/>
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                    <Route path="/balance">
                        <AccountBalance/>
                    </Route>
                </Switch>
    </Router>
    </>
    )
}

export default NavBar