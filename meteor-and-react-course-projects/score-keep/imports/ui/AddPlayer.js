import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  addPlayer(playerName) {
    Players.insert({name: playerName, score: 0});
  }

  handleSubmit(e) {
    e.preventDefault();

    let playerName = e.target.playerName.value;

    if (playerName != '') {
      e.target.playerName.value = '';
      //this.addPlayer(playerName); //<- call fails all the time 'addPlayer is not a function'
      Players.insert({name: playerName, score: 0});
    }
    else {
      console.log('Name cannot be empty');
    }
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' name='playerName' placeholder='Player Name' />
            <button>Add Player</button>
          </form>
      </div>
    );
  }
}