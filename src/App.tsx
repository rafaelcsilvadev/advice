import React from "react";
import Router from "./utils/routes";
import "./assets/styles/main.scss";
import { Store } from "./utils/stores/store";

export default function App() {
	return (
		<Store>
			<Router />
		</Store>
	);
}
