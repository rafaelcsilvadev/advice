export const addClass = (id: string, cssClass: string): HTMLElement | null => {
	const element = document.getElementById(`${id}`);
	element?.classList.add(cssClass);

	return element;
};

export const removeClass = (
	id: string,
	cssClass: string
): HTMLElement | null => {
	const element = document.getElementById(`${id}`);
	element?.classList.remove(cssClass);

	return element;
};

export const toggleClass = (
	id: string,
	cssClass: string
): HTMLElement | null => {
	const element = document.getElementById(`${id}`);
	element?.classList.toggle(cssClass);

	return element;
};

export const delay = (method: any, time: number) => {
	setTimeout(() => {
		method();
	}, time);
};
