import React from "react";
import Layout from "../../components/layout";
import PresentationSystem from "../../components/presentation";

export default function Home() {
	return (
		<div>
			<PresentationSystem />
			<Layout>
				<div className="background-sky h-100vh w-100vw">
				</div>
			</Layout>
		</div>
	);
}

