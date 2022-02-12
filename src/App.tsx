import React from "react";
import "./assets/styles/main.scss";
import { Store } from "./context";
import Home from './assets/pages/home';

export default function App() {
	return (
		<Store>
			<Home />
		</Store>
	);
}
