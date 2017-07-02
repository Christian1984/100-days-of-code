import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

export default class PlayerListItem extends React.Component {
    render() {
        return (
            <div className='item'>
                <p>
                    <span className='playerName'>{this.props.player.name}</span>
                    <span className='staticPlaceholder'> has a score of </span>
                    <span className='playerScore'>{this.props.player.score} </span>
                </p>
                <button name={this.props.player._id} onClick={
                    () => {
                        Players.update(
                            {_id: this.props.player._id}, 
                            {$inc: {score: -1}}
                        );
                    }
                }>-1</button>
                <button name={this.props.player._id} onClick={
                    () => {
                        Players.update(
                            {_id: this.props.player._id}, 
                            {$inc: {score: 1}}
                        );
                    }
                }>+1</button>
                <button name={this.props.player._id} onClick={
                    ()=>{
                        Players.remove({
                            _id: this.props.player._id
                        });
                    }
                }>X</button>
            </div>
        )
    }
}

PlayerListItem.propTypes = {
    player: PropTypes.object.isRequired
}