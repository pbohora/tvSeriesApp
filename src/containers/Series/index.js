import React, { Component } from 'react';
import Intro from '../../components/Intro';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {
    state = {
        anime: [],
        seriesName: '',
        isFetching: false
    }

      onSeriesInputChange = e =>{
          this.setState({seriesName:e.target.value, isFetching: true})
        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({anime:json, isFetching: false}));
      }
    render(){
        const {anime, seriesName,isFetching} = this.state;
        return(
            <div> 
                <Intro message ="Here you can find all your loved anime"/>
                <div>
                    <input type="text" onChange={this.onSeriesInputChange} />
                </div>
                {
                   !isFetching && anime.length === 0 && seriesName.trim() ===''
                    &&
                    <p>Please enter the series name.</p>
                }
                {
                    !isFetching && anime.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>Series your are searhing is not found.</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list= {anime} />
                }
                
            
            </div> 
            
        );
    }
}

export default Series;