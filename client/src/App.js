import React from "react"
import { StreamChat } from "stream-chat"
import { Chat } from "stream-chat-react"
import Cookie from "universal-cookie"
import { ChannelListContainer, ChannelContainer } from "./components/index"
import './App.css'


const apiKey = "rn3zjp77derz";

const client = StreamChat.getInstance(apiKey);

const App = () => {
    return (
        <div className="app__wraapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer/>
            </Chat>
        </div>
    )
}

export default App