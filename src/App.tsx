import React from "react";
import "./styles/main.scss";
import { Store } from "./context";
import Home from "./pages/home";

export default function App() {
	return (
		<Store>
			<Home />
		</Store>
	);
}
