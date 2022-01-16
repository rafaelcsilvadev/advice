import React, { useEffect, useState } from "react";

import Monge from "../../images/monge.png";

interface IProps {
	greeting: any;
}

export default function PresentationSystem(props: IProps) {
	const [greeting, setGreeting] = useState<boolean>(true);

	const animationMonge = () => {
		const monge = document.querySelector("#monge");
		monge?.classList.add("animation-monge-end");
	};

	const animationGreeting = () => {
		const monge = document.querySelector("#greeting");
		monge?.classList.add("animation-text-end");
	};

	const closeGreeting = () => {
		setGreeting(false);
		props.greeting(greeting);
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
			{greeting && (
				<div className="background-sky">
					<div className="h-100vh w-100vw d-flex flex-column justify-content-center align-items-center">
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
			)}
		</>
	);
}
