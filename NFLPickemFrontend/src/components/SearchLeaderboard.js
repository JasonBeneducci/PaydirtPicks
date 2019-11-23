import React from 'react'

class SearchLeaderboard extends React.Component {
    state = {
        username: ""
    }

    changeHandler = (event) => {
        this.setState({
            username: event.target.value
        })
        this.props.searchHandler(event.target.value)
    }

    render () {
        return (
            <input className="leaderboards-search" type="text" placeholder="Search for a username" onChange={this.changeHandler}></input>
        )
    }
}

export default SearchLeaderboard