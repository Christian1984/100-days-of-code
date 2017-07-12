import React from 'react';
import PropTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import StateTest from './StateTest';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/*<StateTest stateText='text' />*/}
        <TitleBar title={this.props.title} subtitle={this.props.subtitle}/>
          <div className='wrapper'>
            <div><PlayerList players={this.props.players} /></div>
            <AddPlayer/>
          </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  players: PropTypes.array.isRequired
}