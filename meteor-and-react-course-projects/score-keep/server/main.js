import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

//import RunExample from './../imports/examples/inheritance.js'

Meteor.startup(() => {
  console.log('Documents in MongoDB:', Players.find().fetch().length);
  //RunExample()
});
