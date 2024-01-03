import { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const cookie = Cookies.get("authenticatedUser");
  const [authUser, setAuthUser] = useState(cookie ? JSON.parse(cookie) : null);
  const api = process.env.REACT_APP_API_URL;

  const signUp = async (formData) => {
    const res = await axios.post(`${api}/users/admin/signup`, formData);
    if (res.status === 200) {
      setAuthUser(res.data.user);
      Cookies.set("authenticatedUser", JSON.stringify(res.data.user), {
        expires: 1,
      });
      Cookies.set("jwt", JSON.stringify(res.data.authToken));

      return res.data.user;
    } else {
      return null;
    }
  };

  const signIn = async (formData) => {
    const res = await axios.post(`${api}/users/admin/login`, formData);
    if (res.status === 200) {
      setAuthUser(res.data.user);
      Cookies.set("authenticatedUser", JSON.stringify(res.data.user), {
        expires: 1,
      });
      Cookies.set("jwt", JSON.stringify(res.data.authToken));

      return res.data.user;
    } else {
      return null;
    }
  };

  const signOut = () => {
    setAuthUser(null);
    Cookies.remove("authenticatedUser");
    Cookies.remove("jwt");
  };

  return (
    <UserContext.Provider
      value={{
        authUser,
        actions: {
          signIn,
          signOut,
          signUp,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
