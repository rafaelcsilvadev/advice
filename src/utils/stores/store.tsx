import React, { createContext, useState } from "react";

const storeContext = createContext<any>(0);

interface IProps {
	children: any;
}

function Store({ children }: IProps) {
	const [example, setExample] = useState<number>(0);

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<storeContext.Provider value={{ example, setExample }}>
			{children}
		</storeContext.Provider>
	);
}

export default storeContext;
export { Store };
