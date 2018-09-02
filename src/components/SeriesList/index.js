import React from 'react';
import './index.css';

const SeriesListItem = ({series}) => (
        <li key={series.show.id}>
            {series.show.name}
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