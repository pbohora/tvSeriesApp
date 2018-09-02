import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';

class Series extends Component {
    state = {
        anime: []
    }

      onSeriesInputChange = e =>{
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({anime:json}));
      }
    render(){
        return(
            <div> 
                The length of the anime array- {this.state.anime.length}
                <div>
                    <input type="text" onChange={this.onSeriesInputChange} />
                </div>
                <SeriesList list= {this.state.anime} />
            
            </div> 
            
        );
    }
}

export default Series;