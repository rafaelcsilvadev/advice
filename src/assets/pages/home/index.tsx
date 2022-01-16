import React, { useState, useEffect } from "react";
import PresentationSystem from "../../components/presentation";

export default function Home() {
	const [showScreen, setSshowScreen] = useState<boolean>(false);

	useEffect(() => {
		console.log(showScreen);
	}, [showScreen]);

	return (
		<div>
			<PresentationSystem
				greeting={(value: boolean) => setSshowScreen(value)}
			/>
			{showScreen && (
				<div>
					<span>oiiii</span>
				</div>
			)}
		</div>
	);
}
