import { createContext, useState } from 'react';

export const UserContext = createContext({
  user: {
    fullname: {
      firstname: '',
      lastname: ''
    },
    email: ''
  },
  setUser: () => { },
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    fullname: {
      firstname: '',
      lastname: ''
    },
    email: ''
  });
  const value = { user, setUser }
  return (
    <UserContext.Provider
      value={value}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;