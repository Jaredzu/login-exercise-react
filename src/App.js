import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated ? <>
        <Profile />
        <Logout />
      </>
        :
        <>
          <Login />
        </>}
    </div>
  );
}

export default App;
