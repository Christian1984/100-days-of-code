import React from 'react';
import PropTypes from 'prop-types';

import { Players } from './../api/players';

export default class PlayerListItem extends React.Component {
  render() {
    let className = `item item--position-${this.props.player.rank}`;

    return (
      <div className={className}>
        <div className='player'>
          <div>
            <h3 className='player__name'>{this.props.player.name}</h3>
            <p className='player__stats'>is in {this.props.player.position} place with {this.props.player.score} point(s).</p>
          </div>
          <div className='player__actions'>
            <button className='button button--round' name={this.props.player._id} onClick={
              () => {
                Players.update(
                  { _id: this.props.player._id },
                  { $inc: { score: -1 } }
                );
              }
            }>-1</button>
            <button className='button button--round' name={this.props.player._id} onClick={
              () => {
                Players.update(
                  { _id: this.props.player._id },
                  { $inc: { score: 1 } }
                );
              }
            }>+1</button>
            <button className='button button--round' name={this.props.player._id} onClick={
              () => {
                Players.remove({
                  _id: this.props.player._id
                });
              }
            }>X</button>
          </div>
        </div>
      </div>
    )
  }
}

PlayerListItem.propTypes = {
  player: PropTypes.object.isRequired
}