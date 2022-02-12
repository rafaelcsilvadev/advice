import React from "react";
import PresentationSystem from "../presentation";
import { usePresentation } from "../../../utils/hooks";

export default function Layout({ children }: any) {
	const { presentation } = usePresentation();

	return (
		<>
			{!presentation && <PresentationSystem />}
			<section className="background-sky w-100vw h-100vh">
				{presentation ? children : null}
			</section>
		</>
	);
}
