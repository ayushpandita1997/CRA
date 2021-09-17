import React from 'react';

const UseContext = React.createContext()
const ChannelContext = React.createContext()

const UseProvider = UseContext.Provider;
const UseConsumer = UseContext.Consumer;

const ChannelProvider = ChannelContext.Provider;
const ChannelConsumer = ChannelContext.Consumer;

export {UseProvider,ChannelProvider}

export {UseContext,ChannelContext}