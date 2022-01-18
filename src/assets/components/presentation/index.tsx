import React, { useEffect } from "react";

import Monge from "../../images/monge.png";

export default function PresentationSystem() {
	const animationMonge = () => {
		const monge = document.querySelector("#monge");
		monge?.classList.add("animation-monge-end");
	};

	const animationGreeting = () => {
		const monge = document.querySelector("#greeting");
		monge?.classList.add("animation-text-end");
	};

	const closeGreeting = () => {
		const salutation = document.querySelector("#salutation");
		salutation?.classList.add("animate-salutation-end");
		setTimeout(() => {
			salutation?.classList.add("d-none");
		}, 1500);
	};

	useEffect(() => {
		animationMonge();
		setTimeout(() => {
			animationGreeting();
		}, 1000);
		setTimeout(() => {
			closeGreeting();
		}, 4000);
	}, []);

	return (
		<>
			<div
				id="salutation"
				className="background-sky h-100vh w-100vw position-absolute animate-salutation-start"
			>
				<div className="d-flex flex-column h-100vh w-100vw justify-content-center align-items-center">
					<div className="d-flex flex-row justify-content-center align-items-center">
						<img
							id="monge"
							src={Monge}
							alt="Monge"
							className="animation-monge-start"
						/>
					</div>
					<div className="d-flex flex-row text-center">
						<h1
							id="greeting"
							className="text-size-1_8 text-light title-size animation-text-start"
						>
							Welcome to the Counsel
						</h1>
					</div>
				</div>
			</div>
		</>
	);
}
