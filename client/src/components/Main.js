import React, { useState } from 'react';
import styled from 'styled-components';
import PlayersList from './PlayersList';
import { useDarkMode } from '../hooks/useDarkMode';

const MainContainer = styled.section`

    margin: 0 5%;
    border: 2px solid lightgrey;

    header {

        display: flex;
        justify-content: flex-end;
        padding: 2%;
        border-bottom: 2px solid lightgrey;

        h1{

            margin: 0 3% 0 0 ;
            text-decoration: none;
            justify-self: center;
        }

        /* The switch - the box around the slider */
        .switch {
        position: relative;
        display: inline-block;
        width: 15.5%;
        height: 34px;
        }

        /* Hide default HTML checkbox */
        .switch input {
        opacity: 0;
        width: 100px;
        height: 100px;
        }

        /* The slider */
        .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        }

        .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        }

        input:checked + .slider {
        background-color: yellow;
        }

        input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
        }

        input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
        border-radius: 34px;
        }

        .slider.round:before {
        border-radius: 50%;
        }
    }

    h1 {
        text-decoration: underline;
    }
`;

function Main (props) {

    const [darkMode, setDarkMode] = useDarkMode ('darkmode', false);
    const handleToggle = e => {
        
        setDarkMode(!darkMode);
    }

    return(
        <MainContainer>
            <header>
            <h1>Womens World Cup</h1>
                <label className="switch">
                    <input type="checkbox" 
                     onClick={handleToggle}/>
                    <span class="slider round" />
                </label>
            </header>
            <h1>Players List</h1>
            <PlayersList players={props.players} />
        </MainContainer>
    );

}

export default Main;