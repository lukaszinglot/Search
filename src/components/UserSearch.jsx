import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearch } from "../store/actions/userActions";
import userSearchStyles from "./userSearch.module.scss";

class UserSearch extends Component {
  handleSearchChange = e => {
    const { setSearch } = this.props;
    setSearch(e.target.value);
  };
  render() {
    return (
      <input
        type="text"
        placeholder="Search by user name"
        value={this.props.search}
        onChange={this.handleSearchChange}
        className={userSearchStyles.inputUser}
      />
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  return {
    search: userReducer.searchValue
  };
};

const mapDispatchToProps = { setSearch };

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
