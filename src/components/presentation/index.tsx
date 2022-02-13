import React, { useEffect } from "react";
import { delay, addClass } from "../../utils";
import { usePresentation } from "../../hooks";

import { monk } from "../../assets/images";

export default function PresentationSystem() {
	const { presentationStorage } = usePresentation();

	const animatingPresentation = () => {
		const elementInfo = [
			{ id: "monk", cssClass: "animation-monk-end", time: 0 },
			{ id: "greeting", cssClass: "animation-text-end", time: 1000 },
			{ id: "salutation", cssClass: "animation-salutation-end", time: 4000 },
			{ id: "salutation", cssClass: "d-none", time: 6500 },
		];

		for (const i in elementInfo) {
			const { id, cssClass, time } = elementInfo[i];
			delay(() => addClass(id, cssClass), time);
		}

		delay(() => presentationStorage(), 5000);
	};

	useEffect(() => {
		animatingPresentation();
	});

	return (
		<>
			<div
				id="salutation"
				className="background-sky position-absolute animation-salutation-start"
			>
				<div className="d-flex flex-column h-100vh w-100vw justify-content-center align-items-center">
					<div className="d-flex flex-row justify-content-center align-items-center">
						<img
							id="monk"
							src={monk}
							alt="Monk"
							className="animation-monk-start"
						/>
					</div>
					<div className="d-flex flex-row text-center">
						<h1
							id="greeting"
							className="text-size-1_8 text-light title-size animation-text-start"
						>
							Welcome to the Advice
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
