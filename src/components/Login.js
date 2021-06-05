import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import { auth } from "./firebase";
import firebase from "firebase/app";
const Login = () => {
  return (
    <>
      <div id="login-page">
        <div id="login-card">
          <h2>React Chat!</h2>

          <div
            onClick={() => {
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
            }}
            style={{ margin: "10px" }}
            className="login-button google"
          >
            <GoogleOutlined style={{ padding: "5px" }} />
          </div>
          <div
            onClick={() => {
              auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
            }}
            style={{ margin: "10px" }}
            className="login-button facebook"
          >
            <FacebookOutlined style={{ padding: "5px" }} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
