import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/userActions";
import showUserStyles from "./showUser.module.scss";
import UserSearch from "./UserSearch";
import { getFilteredUsers } from "../store/selectors/getFilteredUsers";
import UserList from "./UserList";

class ShowUser extends Component {
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
    const { users } = this.props;
    return (
      <div className={showUserStyles.user}>
        <h1>Users list</h1>
        <UserSearch />
        <UserList userList={users} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: getFilteredUsers(state.userReducer.data, state.searchReducer)
  };
};

export default connect(mapStateToProps, {
  getUsers
})(ShowUser);
