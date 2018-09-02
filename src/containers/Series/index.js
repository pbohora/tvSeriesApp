import React, { Component } from 'react';

class Series extends Component {
    state = {
        anime: []
    }

    componentDidMount (){
        fetch('http://api.tvmaze.com/search/shows?q=girls')
        .then(response => response.json())
        .then(json => this.setState({anime:json}));
      }
    render(){
        return(
            <div> The length of the anime array- {this.state.anime.length}</div> 
        );
    }
}

export default Series;