import React from 'react';

export const PlayerCard = (props) => {
    const playerName = props.name;
    const age = props.age
    const stats = props.stats

    return (
        <div>
            <div>
                <h1>{playerName}</h1>
            </div>
            <div>
                <p>{age}</p>
                <p>{stats}</p>
            </div>
        </div>
        )
}