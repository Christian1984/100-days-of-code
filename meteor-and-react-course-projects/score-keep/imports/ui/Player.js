import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';

export default class Player extends React.Component {
    render() {
        return (
            <p className='player'>
                <span className='playerName'>{this.props.name}</span>
                <span className='staticPlaceholder'> has a score of </span>
                <span className='playerScore'>{this.props.score} </span>
                <button name={this.props.playerId} onClick={
                    () => {
                        Players.update(
                            {_id: this.props.playerId}, 
                            {$inc: {score: -1}}
                        );
                    }
                }>-1</button>
                <button name={this.props.playerId} onClick={
                    () => {
                        Players.update(
                            {_id: this.props.playerId}, 
                            {$inc: {score: 1}}
                        );
                    }
                }>+1</button>
                <button name={this.props.playerId} onClick={
                    ()=>{
                        Players.remove({
                            _id: this.props.playerId
                        });
                    }
                }>X</button>
            </p>
        )
    }
}

Player.propTypes = {
    playerId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
}