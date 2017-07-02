import React from 'react';
import PropTypes from 'prop-types';

import {Players} from './../api/players';
import PlayerListItem from './PlayerListItem';

export default class PlayerList extends React.Component {
    renderPlayers() {
        if (this.props.players.length === 0) {
            return <div className='item'><p>Add first player to get started!</p></div>
        }

        return this.props.players.map((player) => 
            { return <PlayerListItem key={player._id} player={player}/>});
    }

    render() {
        return <div>{this.renderPlayers()}</div>;
    }
}

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}