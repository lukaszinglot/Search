import React from "react";
import userListStyles from "./userList.module.scss";
import { connect } from "react-redux";
import { getFilteredUsers } from "../store/selectors/getFilteredUsers";

const UserList = ({ userList }) => {
  if (userList) {
    return userList.map(({ id, name, username }, index) => {
      return (
        <div key={id}>
          <span className={userListStyles.username}>{`${index + 1}.`}</span>
          {name}
          <span className={userListStyles.username}>{` @${username}`}</span>
        </div>
      );
    });
  }
};

const mapStateToProps = state => {
  return {
    userList: getFilteredUsers(state.userReducer.data, state.userReducer.text)
  };
};

export default connect(mapStateToProps, null)(UserList);
