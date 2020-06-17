import React, { useState } from 'react';

export const userContext = React.createContext({
  user: {},
  update: () => {},
});

export default (props) => {
  const [userData, setUserData] = useState({
    name: '',
    day: '',
    month: '',
    year: '',
    type: 'light',
  });

  const updateUser = (user) => {
    setUserData(user);
  };

  return (
    <userContext.Provider value={{ user: userData, update: updateUser }}>
      {props.children}
    </userContext.Provider>
  );
};
