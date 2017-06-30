import {greetUser, getFirstName} from './../imports/utils.js'

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

//modification functions
let addPlayer = (playerName) => {
  Players.insert({name: playerName, score: 0});
};

let removePlayer = (playerId) => {
  Players.remove({_id: playerId});
}

let addScore = (playerId, score=1) => {
  player = Players.findOne({_id: playerId});
  Players.update({_id: playerId}, {name: player.name, score: player.score + score});
}

//handlers
let handleSubmit = (e) => {
  e.preventDefault();

  let playerName = e.target.playerName.value;

  if (playerName != '') {
    e.target.playerName.value = '';
    addPlayer(playerName);
  }
  else {
    console.log('Name cannot be empty');
  }
};

let handleRemove = (e) => {
  e.preventDefault();
  console.log('Removing player with id:', e.target.name);
  removePlayer(e.target.name);
};

//render
function renderPlayers(players) {
  let playersJsx = players.map((player) => (
      <p className='player' key={player._id}>
        <span className='playerName'>{player.name}</span>
        <span className='staticPlaceholder'> has a score of </span>
        <span className='playerScore'>{player.score} </span>
        <button name={player._id} onClick={() => {
          Players.update({_id: player._id}, {$inc: {score: -1}});
          }
        }>-1</button>
        <button name={player._id} onClick={() => {
          Players.update({_id: player._id}, {$inc: {score: 1}});
          }
        }>+1</button>
        <button name={player._id} onClick={handleRemove}>X</button>
      </p>
    )
  );

  return playersJsx;
};

//startup
Meteor.startup(() => {
  let title = 'Score Keep App';

  Tracker.autorun(() => {
      let players = Players.find({}, {sort: {score: -1}}).fetch();

      let playersJsx = renderPlayers(players);

      let title = 'Score Keep App';

      let jsx = (
        <div>
          <h1>{title}</h1>
          {renderPlayers(players)}
          <form onSubmit={handleSubmit}>
            <input type='text' name='playerName' placeholder='Player Name' />
            <button>Add Player</button>
          </form>
        </div>
      );

      ReactDOM.render(jsx, document.getElementById('app'));
  })
});
