import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({series}) => (
        <li key={series.show.id}>
        <Link to = {`/anime/${series.show.id}`}>
        {series.show.name}
        </Link>
        </li>
    )

const SeriesList = ({list})=>{
    return(
        <div>
            <ul className="series-list">
                {list.map(series=>(
                  <SeriesListItem series={series} key={series.show.id} />  
                ))}
            </ul>
        </div>
    );
}

export default SeriesList;