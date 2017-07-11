import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import subreducers
import channels from './channels';
import messages from './messages';
import name from './name';
import newChannelEntry from './newChannelEntry';
import newMessageEntry from './newMessageEntry';

const reducer = combineReducers({
  channels,
  messages,
  name,
  newChannelEntry,
  newMessageEntry
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    createLogger()
  ))
);

export default store;
export * from './channels';
export * from './messages';
export * from './name';
export * from './newChannelEntry';
export * from './newMessageEntry';
