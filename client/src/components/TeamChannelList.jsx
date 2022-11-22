import React from 'react';
import { AddChannel } from '../assets'

const TeamChannelList = ({children, error = false, loading, type}) => {
    if(error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <div className="team-channel-list__message">
                    Connection Error, Please wait a moment and try again
                </div>
            </div>
        ) : null
    }

    if(loading) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <div className="team-channel-list__message">
                    {type === 'team' ? 'Channels' : 'Messages'} Loading...
                </div>
            </div>
        ) : null
    }

    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Channels' : 'Direct Messages'}
                </p>
                {/* TODO Add a button*/}
            </div>
        </div>
    );
};

export default TeamChannelList;