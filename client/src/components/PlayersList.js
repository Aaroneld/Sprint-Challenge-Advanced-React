import React from 'react';
import styled from 'styled-components';
import Player from './Player';


const PlayersContainer = styled.div`

    margin: 2%;
    
`;

function PlayersList (props) {

    return(
        <PlayersContainer>
        {props.players.length > 0 && props.players.map(player => {
            return <Player key={player.name} player={player} /> 
        })}
        </PlayersContainer>
    );
}

export default PlayersList;