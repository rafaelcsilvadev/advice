/// <reference types="cypress" />

interface IElementInfo {
	title: string;
	id: string;
	cssClass: Array<string>;
}

const testHasClass = (route: string, array: Array<IElementInfo>, wait) => {
	cy.visit(route);
	cy.wait(wait);

	for (let i in array) {
		for (let j in array[i].cssClass) {
			cy.get(`#${array[i].id}`).should("satisfy", ($el) => {
				const classList = Array.from($el[0].classList);
				return classList.includes(array[i].cssClass[j]);
			});
		}
	}
};

export default {
	testHasClass,
};
