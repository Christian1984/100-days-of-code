import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import { Players } from './../api/players';
import PlayerListItem from './PlayerListItem';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return <div className='item'><p className='item__empty-list'>Add first player to get started!</p></div>
    }

    return this.props.players.map((player) =>
    { return <PlayerListItem key={player._id} player={player} /> });
  }

  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>);
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}