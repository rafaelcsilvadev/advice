const presentationWasShown = async (): Promise<boolean> => {
	const storage = await localStorage.getItem("@PresentationWasShown");
	if (!storage) await localStorage.setItem("@PresentationWasShown", "true");

	return Boolean(storage);
};

const addClass = (id: string, cssClass: string): HTMLElement | null => {
	const element = document.getElementById(`${id}`);
	element?.classList.add(cssClass);

	return element;
};

const removeClass = (id: string, cssClass: string): HTMLElement | null => {
	const element = document.getElementById(`${id}`);
	element?.classList.remove(cssClass);

	return element;
};

const toggleClass = (id: string, cssClass: string): HTMLElement | null => {
	const element = document.getElementById(`${id}`);
	element?.classList.toggle(cssClass);

	return element;
};

const delay = (method: any, time: number) => {
	setTimeout(() => {
		method();
	}, time);
};

export default {
	presentationWasShown,
	delay,
	animations: {
		addClass,
		removeClass,
		toggleClass,
	},
};
