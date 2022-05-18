import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiExaRspuS7kt5mGLFhmvMSR8ZPB6ru5M",
  authDomain: "petabby-ecommer-react.firebaseapp.com",
  projectId: "petabby-ecommer-react",
  storageBucket: "petabby-ecommer-react.appspot.com",
  messagingSenderId: "918270610868",
  appId: "1:918270610868:web:e8b9b18b8cb99cdffdb6e1",
};
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
