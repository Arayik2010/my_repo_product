import React from "react";
import { useRef } from "react";
import Main from "../Main/Main";


import "./login.scss";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const getEmail = localStorage.getItem("emaildata");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = (email: React.RefObject<HTMLInputElement>, password: React.RefObject<HTMLInputElement>) => {
    if (email?.current?.value === "abc@gmail.com" && password?.current?.value === "AR31ar#$") {
      localStorage.setItem("emaildata", "abc@gmail.com");
      localStorage.setItem("passwordData", "AR25ar#$");
    }
    //  window.location.reload();
  };

  return (
    <>
      {getEmail && getPassword ? (
     <Main/>
      ) : (
        <div className="loginPage">
          <div className="login">
            <div>
              <h3>SIGN IN</h3>
            </div>

            <form>
              <input className="email" type="text" placeholder="email" ref={emailRef} />
              <input className="pass" type="password" placeholder="password" ref={passRef} />
              <div className="checkbox">
                <input className="inputCheckbox" type="checkbox" value="save" />
                <label>Save password</label>
              </div>

              <button className="loginButton" onClick={() => handleSubmit(emailRef, passRef)}>Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default Login;
