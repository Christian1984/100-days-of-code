import {greetUser, getFirstName} from './../imports/utils.js'

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

//startup
Meteor.startup(() => {
  let title = 'Score Keep App';
  let subtitle = 'Keep Track of Your Scores';

  Tracker.autorun(() => {
      let players = Players.find({}, {sort: {score: -1}}).fetch();

      let title = 'Score Keep App';

      let jsx = (
        <div>
          <TitleBar title={title} subtitle={subtitle}/>
          <div><PlayerList players={players} /></div>
          <AddPlayer/>
        </div>
      );

      ReactDOM.render(jsx, document.getElementById('app'));
  })
});
