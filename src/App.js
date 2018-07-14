import React,
{
  Component
}
from 'react';
import './App.css';
import ChatBox from './components/ChatComponent.js';
class App extends Component
{
  constructor()
  {
    super()
    console.log("Hello World!");
    this.state = {
      test_array: []
    }
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
      <ChatBox/>

    </div>);
  }
}

export default App;