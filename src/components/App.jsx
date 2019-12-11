import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/userActions";
import showUserStyles from "./showUser.module.scss";
import UserSearch from "./UserSearch";
import UserList from "./UserList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { users } = this.props;
    if (!users.length) {
      this.props.getUsers();
    }
  }

  render() {
    return (
      <div className={showUserStyles.user}>
        <h1>Users list</h1>
        <UserSearch />
        <UserList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.userReducer.data
  };
};

export default connect(mapStateToProps, {
  getUsers
})(App);
