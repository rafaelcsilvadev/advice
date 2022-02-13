import React from "react";
import { useContextSelector } from "use-context-selector";
import { storeContext } from "../context";

const usePresentation = () => {
	const presentation = useContextSelector(
		storeContext,
		(context) => context.presentation
	);
	const presentationStorage = useContextSelector(
		storeContext,
		(context) => context.presentationStorage
	);

	return {
		presentation,
		presentationStorage,
	};
};

export default usePresentation;
