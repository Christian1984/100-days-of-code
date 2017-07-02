import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

import App from './../imports/ui/App';

//startup
Meteor.startup(() => {
  let title = 'Score Keep App';
  let subtitle = undefined; //'Keep Track of Your Scores';

  Tracker.autorun(() => {
      let players = Players.find({}, {sort: {score: -1, name: 1}}).fetch();
      ReactDOM.render(<App title={title} subtitle={subtitle} players={players}/>, document.getElementById('app'));
  })
});
