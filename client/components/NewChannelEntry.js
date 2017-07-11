import React, { Component } from 'react';
import { connect } from 'react-redux';
import { writeChannelName, postChannel } from '../store/';

function NewChannelEntry (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input value={props.newChannelEntry} onChange={props.handleChange} className="form-control" type="text" name="channelName" placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
function mapStateToProps(state, ownProps){
  return {
    newChannelEntry: state.newChannelEntry
  };
};

function mapDispatchToProps(dispatch, ownProps){
  return {
      handleChange (evt) {
        dispatch(writeChannelName(evt.target.value));
      },

      handleSubmit (evt) {
        evt.preventDefault();
        const channelName = evt.target.channelName.value;
        dispatch(postChannel({ name: channelName}, ownProps.history));
        dispatch(writeChannelName(''));
      }

  };
};

const NewChannelEntryContainer = connect(mapStateToProps,mapDispatchToProps)(NewChannelEntry);
export default NewChannelEntryContainer;
