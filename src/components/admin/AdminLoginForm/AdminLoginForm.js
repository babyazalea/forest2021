import React, { useState } from "react";
import { useHttp } from "../../../hooks/http-hooks";

import LoadingDots from "../../ui/LoadingDots/LoadingDots";

import "./AdminLoginForm.css";

const AdminLoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, sendPostRequest } = useHttp();

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onLogin = async (event) => {
    event.preventDefault();

    const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`;

    const loginData = {
      email,
      password,
      returnSecureToken: true,
    };

    try {
      const responseData = await sendPostRequest(loginUrl, loginData);

      props.login(responseData);
    } catch (err) {}
  };

  return (
    <div>
      {isLoading ? (
        <LoadingDots />
      ) : (
        <form>
          {error ? <p className="error-message">{error}</p> : null}
          <input
            type="email"
            placeholder="email"
            name="email"
            onChange={(event) => onChange(event)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(event) => onChange(event)}
          />
          <button className="login-btn" onClick={onLogin}>
            로그인
          </button>
        </form>
      )}
    </div>
  );
};

export default AdminLoginForm;
