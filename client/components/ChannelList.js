import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux';

function ChannelList(props) {
  return (
    <ul>
    {
      props.channels.map(channel => {
        return (
          <li key={channel.id}>
            <NavLink to={`/channels/${channel.id}`} activeClassName="active">
              <span># {channel.name}</span>
              <span className="badge">{ props.messages.filter(message => message.channelId === 1).length }</span>
            </NavLink>
          </li>
        )
      })
    }
      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/
function mapStateToProps(state) {
  return {
    channels: state.channels,
    messages: state.messages
  };
}

const ChannelListContainer = connect(mapStateToProps)(ChannelList);
export default ChannelListContainer;
