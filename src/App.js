import React from 'react';

import './index.css';
import ButtonsPanel from './components/ButtonsPanel';
import Tile from './components/Tile';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <ButtonsPanel />
        <Tile />
      </div>
    )
  }
}
