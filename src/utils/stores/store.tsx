import React, { createContext, useCallback, useState } from "react";
import functions from "../functions";

const storeContext = createContext<any>(0);

interface IProps {
	children: any;
}

function Store({ children }: IProps) {
	const [presentation, setPresentation] = useState<Promise<boolean> | boolean>(
		false
	);
	const { presentationWasShown } = functions;

	const presentationStorage = useCallback(() => {
		const result = presentationWasShown();
		setPresentation(result);
	}, [presentation]);

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

export default storeContext;
export { Store };
