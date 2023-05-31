import { useEffect, useState } from "react";
import "./App.scss";
import Login from "./modules/Login/Login";
import Board from "./modules/Board/Board";
import NotFound from "./modules/NotFound/NotFound";
import GameSettings from "./modules/GameSettings/GameSettings";
import Protected from "./modules/Protected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // check if the user is logged in
    if (localStorage.getItem("user") !== null) {
      setIsLoggedIn(true);
    }

    // after checking set the loading to false
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading ? null : (
        <div className="App">
          <div className="container">
            <Router>
              <Routes>
                <Route path="/" exact element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route
                  path="/game-settings"
                  exact
                  element={
                    // use protected route for those pages which are not public
                    // if the user is not logged in redirect to login page
                    <Protected isLoggedIn={isLoggedIn}>
                      <GameSettings />
                    </Protected>
                  }
                />
                <Route
                  path="/board"
                  exact
                  element={
                    // use protected route for those pages which are not public
                    // if the user is not logged in redirect to login page
                    <Protected isLoggedIn={isLoggedIn}>
                      <Board />
                    </Protected>
                  }
                />
                <Route path="/not-found" exact element={<NotFound />} />
                {/* only match this when no other routes match */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Router>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
