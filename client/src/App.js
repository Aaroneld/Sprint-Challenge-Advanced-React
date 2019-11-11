import React from 'react';
import './App.css';
import Main from './components/Main';
import Axios from 'axios';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {

    background: white;
    color: black;
  }

  .dark-mode {

    background: black;
    color: white;
  }
`;

class  App extends React.Component {

  constructor(){
    super();
    this.state = {
      players: []

    }  

  }

    
  componentDidMount() {

    const getPlayers = () => {
      Axios.get("http://localhost:5000/api/players")
      .then(response => {
        let data = response.data;
        this.setState({players: data});
      })
      .catch(error => {
        console.log(error);
      })
    }

    getPlayers();
    
  }

  render () { return (
    
    <div className="App">
      <GlobalStyles />
      <Main players={this.state.players} />
    </div>
   );
  }
}

export default App;
