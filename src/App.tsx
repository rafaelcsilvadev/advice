import React from "react";
import "./assets/styles/main.scss";
import { Store } from "./utils/stores";
import Home from './assets/pages/home';

export default function App() {
	return (
		<Store>
			<Home />
		</Store>
	);
}
