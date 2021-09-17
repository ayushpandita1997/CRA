import React,{useContext} from 'react';
import {UseContext} from './UseContext';
import {ChannelContext} from './UseContext';

function ComponentF() {

   const user =  useContext(UseContext)
   const channel =   useContext(ChannelContext)
    
    return (
        <div>
            {user} {channel}
        </div>
    );
}

export default ComponentF;