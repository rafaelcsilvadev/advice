import React, { useCallback, useState } from "react";

import { createContext } from "use-context-selector";
interface IProps {
	children: any;
}

export const storeContext = createContext<any>(null);

export function Store({ children }: IProps) {
	const [presentation, setPresentation] = useState<Promise<boolean> | boolean>(
		false
	);

	const presentationStorage = useCallback(() => {
		const storage = localStorage.getItem("@PresentationWasShown");
		if (!storage) localStorage.setItem("@PresentationWasShown", "true");

		setPresentation(Boolean(storage));
	}, []);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<storeContext.Provider
			value={{
				presentationStorage,
				presentation,
			}}
		>
			{children}
		</storeContext.Provider>
	);
}
