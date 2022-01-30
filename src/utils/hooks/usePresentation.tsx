import React from "react";
import { useContextSelector } from "use-context-selector";
import { storeContext } from "../stores";

export default function usePresentation() {
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
}
