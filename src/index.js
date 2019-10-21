import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles/App.css";
import "./styles/Navigation.css";
import "./styles/Footer.css";
import "./styles/Content.css";
import "./styles/Products.css";
import "./styles/HomePage.css";
import "./styles/Contact.css";
import "./styles/Cart.css";
import "./styles/Error.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
