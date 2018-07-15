import React,
{
  Component
}
from 'react';
import './App.css';
import ChatComponent from './components/ChatComponent.js';
import openSocket from 'socket.io-client';
import Draggable,
{
  DraggableCore
}
from 'react-draggable'; // Both at the same time
const socket = openSocket('https://fusionpaloalto.elliotsyoung.com');
class App extends Component
{
  constructor(props)
  {
    super(props)
    console.log("Hello World!");
    this.sendChat = this.sendChat.bind(this);
    this.handleChatInputChange = this.handleChatInputChange.bind(this);
    this.onStart = this.onStart.bind(this)
    this.onStop = this.onStop.bind(this)

    this.state = {
      messages: ["Hello There", "Welcome to the app!", "this is the third message"],
      inputText: "",
      activeDrags: 0
    }

    // Socket Setup
    socket.emit("subscribe",
    {
      room: "pi-client"
    });
    socket.on("pi room chat message", (message) =>
    {
      const updatedMessages = this.state.messages.slice();
      updatedMessages.push(message);
      this.setState(
      {
        messages: updatedMessages
      }, () =>
      {
        var ChatBox = document.getElementById("chat-messages-box");
        ChatBox.scrollTop = ChatBox.scrollHeight;
      })
    })


  }
  sendChat(event)
  {
    event.preventDefault();

    socket.emit("pi room chat message", this.state.inputText);
    this.setState(
    {
      inputText: ""
    })
  }
  handleChatInputChange(event)
  {
    console.log("text changed");
    this.setState(
    {
      [event.target.name]: event.target.value
    })
  }

  // DRAG HANDLERS
  onStart()
  {
    this.setState(
    {
      activeDrags: ++this.state.activeDrags
    });
  }

  onStop()
  {
    this.setState(
    {
      activeDrags: --this.state.activeDrags
    });
  }

  render()
  {
    const dragHandlers = {
      onStart: this.onStart,
      onStop: this.onStop
    };
    return (<div className="App">

      <header className="App-header">
        <h1 className="App-title">BASIC CHAT CLIENT</h1>
      </header>
      <p className="App-intro">
        Todo: integrate socket io into project
      </p>
      <Draggable {...dragHandlers} enableUserSelectHack={false}>
          <div>
            <ChatComponent inputText={this.state.inputText} handleChatInputChange={this.handleChatInputChange} sendChat={this.sendChat} messages={this.state.messages} />
          </div>
      </Draggable>
    </div>);
  }
}

export default App;