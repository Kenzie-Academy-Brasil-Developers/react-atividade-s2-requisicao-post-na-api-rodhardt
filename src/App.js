import "./App.css";

import { useState } from "react";
import Login from "./Components/login";
import Display from "./Components/display";

function App() {
  const [isAllowed, setIsAllowed] = useState(false);
  const [isAttempt, setIsAttempt] = useState(true);
  const [loggedUser, setLoggedUser] = useState({})

  
  const handleLogin = (result) => {
    setIsAttempt(true)
    setIsAllowed(false)
    if (result.data) {
      setLoggedUser(result.data)
      setIsAllowed(true)
    } 
  }

  return (
    <div className="App">
      <Login handleLogin={handleLogin}/>
      {isAttempt ? (<Display isAllowed={isAllowed} />) : null}
    </div>
  );
}

export default App;
