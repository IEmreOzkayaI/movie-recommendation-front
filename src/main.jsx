import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../app/globals.css";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./states/store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode> // TODO: Remove this line
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	// </React.StrictMode>
);
