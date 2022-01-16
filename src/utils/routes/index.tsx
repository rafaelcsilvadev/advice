import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../assets/pages/home";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
