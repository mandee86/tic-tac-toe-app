import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Login.scss";
import { getUser } from "../../services/userApi";

const Login = ({ setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getUser((user) => setUser(user));
  }, []);

  // login function
  const handleSubmit = (e) => {
    // it`s necessery, otherwise the page will reload
    e.preventDefault();

    // validate the form -> if the form is valid the user can login
    if (validateForm()) {
      localStorage.setItem("user", user.userName);
      setIsLoggedIn(true);
      // after user is logged in, navigate to the game settings page
      navigate("/game-settings");
    } else {
      console.log("error");
    }
  };

  // form validation
  const validateForm = () => {
    let isValid = true;

    // if the user name is empty throw an error
    if (userName === "" || userName === null) {
      isValid = false;
      toast("Add meg a felhasználónevet!");
    }
    // if the password is empty throw an error
    if (password === "" || password === null) {
      isValid = false;
      toast("Add meg a jelszót!");
    }
    // if the user name and password is not empty, but the password or the user name doesn`t match the ones in database throw an error
    if (
      (userName !== "" && userName !== null && password !== "" && password !== null && user.userName !== userName) ||
      user.password !== password
    ) {
      isValid = false;
      toast("Rossz felhasználónév vagy jelszó!");
    }

    return isValid;
  };

  return (
    <div className="card v-centered login-card">
      <div className="login-form w-500">
        <div className="card-header">
          <h2>Bejelentkezés</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-item">
            <label htmlFor="userName">
              Felhasználónév<sup className="text-red">*</sup>
            </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="form-item">
            <label htmlFor="password">
              Jelszó<sup className="text-red">*</sup>
            </label>
            <div className="input-wrapper has-icon">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={showPassword ? "/img/icon-eye-inactive.svg" : "/img/icon-eye.svg"}
                onClick={() => setShowPassword(!showPassword)}
                className="input-icon"
                alt="eye"
              />
            </div>
          </div>

          {/* if there is an error, show a toastify to the user */}
          <ToastContainer />
          <div className="card-footer">
            <Button type="submit" text="Bejelentkezés" />
          </div>
        </form>
      </div>
      <div className="welcome-box w-500">
        <h1 className="text-center">Welcome to login</h1>
        <img src="/img/icon-tic-tac-toe-white.svg" className="icon" alt="Tic tac toe icon" />
      </div>
    </div>
  );
};

export default Login;
