import React,
{
  Component
}
from 'react';
import './App.css';
import ChatComponent from './components/ChatComponent.js';
class App extends Component
{
  constructor(props)
  {
    super(props)
    console.log("Hello World!");
    this.sendChat = this.sendChat.bind(this);
    this.handleChatInputChange = this.handleChatInputChange.bind(this);
    this.state = {
      messages: ["Hello There", "Welcome to the app!", "this is the third message"],
      inputText: ""
    }
  }
  sendChat(event)
  {
    event.preventDefault();
    const updatedMessages = this.state.messages.slice();
    updatedMessages.push(this.state.inputText);

    this.setState(
    {
      messages: updatedMessages,
      inputText: ""
    })
    var ChatBox = document.getElementById("chat-messages-box");
    ChatBox.scrollTop = ChatBox.scrollHeight;
  }
  handleChatInputChange(event)
  {
    this.setState(
    {
      [event.target.name]: event.target.value
    })
  }
  render()
  {
    return (<div className="App">

      <header className="App-header">
        <h1 className="App-title">BASIC CHAT CLIENT</h1>
      </header>
      <p className="App-intro">
        Todo: integrate socket io into project
      </p>
      <ChatComponent inputText={this.state.inputText} handleChatInputChange={this.handleChatInputChange} sendChat={this.sendChat} messages={this.state.messages} />

    </div>);
  }
}

export default App;