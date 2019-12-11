import React, { Component } from "react";
import { connect } from "react-redux";
import { getSearch } from "../store/actions/userActions";
import userSearchStyles from "./userSearch.module.scss";

class UserSearch extends Component {
  handleSearchChange = e => {
    this.props.getSearch(e.target.value);
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

const mapStateToProps = state => {
  return {
    search: state.searchReducer
  };
};

const mapDispatchToProps = { getSearch };

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
