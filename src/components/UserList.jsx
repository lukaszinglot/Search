import React from "react";
import userListStyles from "./userList.module.scss";
import { connect } from "react-redux";
import SelectedUser from "../store/selectors/index";

const UserList = ({ selectedUsers }) => {
  if (selectedUsers) {
    return selectedUsers.map(({ id, name, username }, index) => {
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
    selectedUsers: SelectedUser(state)
  };
};

export default connect(mapStateToProps, null)(UserList);
