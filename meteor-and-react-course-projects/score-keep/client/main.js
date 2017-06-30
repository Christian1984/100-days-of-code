import {greetUser, getFirstName} from './../imports/utils.js'

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

//modification functions

let removePlayer = (playerId) => {
  Players.remove({_id: playerId});
}

let addScore = (playerId, score=1) => {
  player = Players.findOne({_id: playerId});
  Players.update({_id: playerId}, {name: player.name, score: player.score + score});
}

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
  let subtitle = 'Keep Track of Your Scores';

  Tracker.autorun(() => {
      let players = Players.find({}, {sort: {score: -1}}).fetch();

      let playersJsx = renderPlayers(players);

      let title = 'Score Keep App';

      let jsx = (
        <div>
          <TitleBar title={title} subtitle={subtitle}/>
          {renderPlayers(players)}
          <AddPlayer/>
        </div>
      );

      ReactDOM.render(jsx, document.getElementById('app'));
  })
});
