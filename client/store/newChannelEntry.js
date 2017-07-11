import axios from 'axios';
import socket from '../socket';

// ACTION TYPES

const WRITE_CHANNEL_NAME = 'WRITE_CHANNEL_NAME';

// ACTION CREATORS

export function writeChannelName (content){
  const action = { type: WRITE_CHANNEL_NAME, content};
  return action;
}

// REDUCER

export default function newChannelReducer (state = "", action) {

  switch (action.type) {

    case WRITE_CHANNEL_NAME:
      return {
        ...state,
        newChannelEntry: action.content
      };

    default:
      return state;
  }
}
