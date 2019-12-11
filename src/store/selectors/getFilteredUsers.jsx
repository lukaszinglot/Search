export const getFilteredUsers = (users, text) => {
  const userInput = text.toLowerCase();

  return users.filter(({ name }) => {
    return name.toLowerCase().includes(userInput.toLowerCase());
  });
};
