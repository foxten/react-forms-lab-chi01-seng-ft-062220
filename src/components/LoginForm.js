import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserInfo = event =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loggingIn = event =>{
    event.preventDefault()
    debugger
    if (!this.state.username || !this.state.password) return
      this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.loggingIn}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUserInfo} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleUserInfo} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
