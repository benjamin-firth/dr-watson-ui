import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../Header/Header';
import WelcomeModal from '../WelcomeModal/WelcomeModal';
import ChatBox from '../ChatBox/ChatBox';
import { removeUser, hasErrored, submitMessage, deleteMessages } from '../../actions';
import { endConversation } from '../../apiCalls';
import './App.css';

export class App extends Component {
  addMessage = (message, isUser) => {
    this.props.submitMessage(message, isUser);
  }

  clearMessages = () => {
    this.setState({ messages: [] });
  }

  signOut = async () => {
    try {
      await endConversation();
      this.props.removeUser();
      this.clearMessages();
    } catch({ message }) {
      this.props.hasErrored(message);
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        {!user && <WelcomeModal type='button' addMessage={this.addMessage} />}
        {user && <ChatBox addMessage={this.addMessage} />}
      </div>
    );
  }
}

export const mapStateToProps = ({ user }) => ({
  user
});

export const mapDispatchToProps = dispatch =>  bindActionCreators({ removeUser, hasErrored, submitMessage, deleteMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
