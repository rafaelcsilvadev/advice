import React, { useContext, useEffect } from "react";
import storeContext from "../../../utils/stores/store";
import functions from "../../../utils/functions";

import Monk from "../../images/monk.png";

export default function PresentationSystem() {
	const { presentationStorage } = useContext(storeContext);
	const { delay, animations } = functions;

	const animatingPresentation = () => {
		const elementInfo = [
			{ id: "monk", cssClass: "animation-monk-end", time: 0 },
			{ id: "greeting", cssClass: "animation-text-end", time: 1000 },
			{ id: "salutation", cssClass: "animate-salutation-end", time: 4000 },
			{ id: "salutation", cssClass: "d-none", time: 6500 },
		];

		for (let i in elementInfo) {
			const { id, cssClass, time } = elementInfo[i];
			const { addClass } = animations;
			delay(() => addClass(id, cssClass), time);
		}

		delay(() => presentationStorage(), 7500);
	};

	useEffect(() => {
		animatingPresentation();
	}, []);

	return (
		<>
			<div
				id="salutation"
				className="background-sky position-absolute animate-salutation-start"
			>
				<div className="d-flex flex-column h-100vh w-100vw justify-content-center align-items-center">
					<div className="d-flex flex-row justify-content-center align-items-center">
						<img
							id="monk"
							src={Monk}
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
