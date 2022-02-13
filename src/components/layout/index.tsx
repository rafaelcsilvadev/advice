import React, { memo, ReactNode, FC } from "react";
import PresentationSystem from "../presentation";
import { usePresentation } from "../../hooks";

interface Layout {
	children: ReactNode;
}

const Layout: FC<Layout> = ({ children }) => {
	const { presentation } = usePresentation();

	return (
		<>
			{!presentation && <PresentationSystem />}
			<section className="background-sky w-100vw h-100vh">
				{presentation ? children : null}
			</section>
		</>
	);
};

export default memo(Layout);
