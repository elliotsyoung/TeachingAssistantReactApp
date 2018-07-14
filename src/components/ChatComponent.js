import React,
{
  Component
}
from "react";

class ChatComponent extends Component
{
  constructor()
  {
    super()
  }
  render()
  {
    return (
      <div className="chat-wrapper">
        <div className="chat-messages-box">
          <ul className="chat-messages-box-list">
            <li>test 1</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos at saepe omnis, in. Quis, obcaecati, aperiam adipisci sed totam tenetur exercitationem cupiditate, expedita minus dolores vero alias ea deleniti.</li>
            <li>tstes</li>
            <li>test 1</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos at saepe omnis, in. Quis, obcaecati, aperiam adipisci sed totam tenetur exercitationem cupiditate, expedita minus dolores vero alias ea deleniti.</li>
            <li>tstes</li>
            <li>tstes</li>
            <li>test 1</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eos at saepe omnis, in. Quis, obcaecati, aperiam adipisci sed totam tenetur exercitationem cupiditate, expedita minus dolores vero alias ea deleniti.</li>
            <li>tstes</li>
          </ul>
        </div>
        <div className="chat-input-box">
          <textarea id="chat-text-input" ></textarea>
          <button className="btn btn-md">send</button>
        </div>
      </div>
    )
  }
}

export default ChatComponent;