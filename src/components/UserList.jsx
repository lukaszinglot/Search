import React from "react";
import userListStyles from "./userList.module.scss";

const UserList = props => {
  return props.userList.map(({ id, name, username }, index) => {
    return (
      <div key={id}>
        <span className={userListStyles.username}>{`${index + 1}.`}</span>
        {name}
        <span className={userListStyles.username}>{` @${username}`}</span>
      </div>
    );
  });
};

export default UserList;
