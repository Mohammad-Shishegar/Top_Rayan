import React, {Component, useContext} from 'react'
import {Launcher} from 'react-chat-window'
import { ThemeContext } from '../../services/context/DarkTheme';
import "./messagestyle.scss"
 
class Message extends Component {
 
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  //  Theme = useContext(ThemeContext)
 
  render() {
    return (
    <div className={this.props.dark === true ? "message message-dark" : "message"}>
      <Launcher
        agentProfile={{
          teamName: 'پشتیبانی پرتو رایان',
          imageUrl: 'https://cdn3.iconfinder.com/data/icons/customer-suport/32/customer-277-415029-80.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default Message