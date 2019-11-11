import React from 'react';
import styled from 'styled-components';

const PlayerContainer = styled.div`

    border: 2px solid lightgrey;
    margin: 2%;
`;

function Player (props) {

return (
    <PlayerContainer>
        <h2>{props.player.name}</h2>
        <h3>{props.player.country}</h3>
        <p>{`Searches: ${props.player.searches}`}</p>
    </PlayerContainer>);
}

export default Player;