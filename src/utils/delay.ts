export const delay = (method: any, time: number) => {
	setTimeout(() => {
		method();
	}, time);
};
