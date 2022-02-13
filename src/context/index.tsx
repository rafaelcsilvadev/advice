import React, { useCallback, useState, ReactNode, FC } from "react";

import { createContext } from "use-context-selector";
interface ContextProps {
	children: ReactNode;
}

interface StoreContext {
	presentation: boolean;
	presentationStorage: () => void;
}

export const storeContext = createContext({} as StoreContext);

export const Store: FC<ContextProps> = ({ children }) => {
	const [presentation, setPresentation] = useState<boolean>(false);

	const presentationStorage: () => void = useCallback(() => {
		const storage = localStorage.getItem("@PresentationWasShown");
		if (!storage) localStorage.setItem("@PresentationWasShown", "true");

		setPresentation(Boolean(storage));
	}, []);

	return (
		<storeContext.Provider
			value={{
				presentationStorage,
				presentation,
			}}
		>
			{children}
		</storeContext.Provider>
	);
};
