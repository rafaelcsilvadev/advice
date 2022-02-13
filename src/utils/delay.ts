export const delay = (method: () => void, time: number) => {
	setTimeout(() => {
		method();
	}, time);
};
