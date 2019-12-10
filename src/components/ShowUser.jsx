import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, getSearch } from "../store/actions/userActions";
import showUserStyles from "./showUser.module.scss";

class ShowUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    if (!this.props.users.length) {
      this.props.getUsers();
    }
  }

  componentWillUpdate(nextProps, nextState) {
    const { search } = this.state;
    const { getSearch } = this.props;
    if (search !== nextState.search) {
      getSearch(nextState.search);
    }
  }

  renderUsers() {
    const { users, search } = this.props;
    if (search.length) {
      return search.map(({ id, name, username }, index) => {
        return (
          <div key={id}>
            <span className={showUserStyles.username}>{`${index + 1}.`}</span>
            {name}
            <span className={showUserStyles.username}>{` @${username}`}</span>
          </div>
        );
      });
    } else {
      return users.map(({ id, name, username }, index) => {
        return (
          <div key={id}>
            <span className={showUserStyles.username}>{`${index + 1}.`}</span>
            {name}
            <span className={showUserStyles.username}>{` @${username}`}</span>
          </div>
        );
      });
    }
  }

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    return (
      <div className={showUserStyles.user}>
        <h1>Users List</h1>
        <input
          type="text"
          placeholder="Search by username"
          onChange={this.updateSearch}
          value={this.state.search}
          className={showUserStyles.inputUser}
        />
        {this.renderUsers()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersReducer.data,
    search: state.usersReducer.filtered
  };
};

export default connect(mapStateToProps, {
  getUsers,
  getSearch
})(ShowUser);
