import React from 'react';
import {samples} from './sample-data';
import {Link} from 'react-router-dom';

/**
 * This tab represents a list of heroes that we can click
 * @param match -- the match object passed from react-router
 */
export const Tab = ({data = samples, match}) => {
    return (
        <div>
            <h2>Heroes of the Modern World</h2>
            <ul>
                {data.map(r => {
                    return (
                        <li key={r.id}>
                            <Link to={`${match.url}/${r.id}`}>{r.name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

/**
 * The individual bio of a hero
 */
export const Bio = ({data = samples, match}) => {
    const d = data[match.params.id];
    return (
        <div>
            <h2>AOL Biography</h2>
                <div>
                    {`Name: ${d.name} ${d.lastName}`}<br/>
                    {`Age: ${d.age}`}<br/>
                    {`Sex: ${d.sex}`}<br/>
                    {`Location: ${d.location}`}
                </div>
        </div>
    );
}
