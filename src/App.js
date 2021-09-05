import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styling/App.css";

//pages
import Home from "./pages/Home";
import Commissions from "./pages/Commissions";

// components
import Nav from "./components/Nav";

function App() {
	return (
		<div className="App">
			<Nav />
			<Switch>
				<Route path="/commissions" component={Commissions} />
				<Route exact path="/" component={Home} />
			</Switch>
		</div>
	);
}

export default App;
