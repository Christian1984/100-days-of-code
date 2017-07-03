import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from './../imports/api/players';

import App from './../imports/ui/App';

//startup
Meteor.startup(() => {
  let title = 'Score Keep App';
  let subtitle = 'Keep Track of Your Scores'; //undefined;

  Tracker.autorun(() => {
      let players = Players.find({}, {sort: {score: -1, name: 1}}).fetch();
      let positionedPlayers = calculatePlayerPositions(players);
      //console.log(positionedPlayers);
      ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayers}/>, document.getElementById('app'));
  })
});
