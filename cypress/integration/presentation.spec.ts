/// <reference types="cypress" />

describe("Check presentation animate", () => {
	it("CSS class in monk image", () => {
		cy.clearLocalStorage();
		cy.visit("/");
		cy.get("#monk").should("satisfy", ($el) => {
			const classList = Array.from($el[0].classList);
			return (
				classList.includes("animation-monk-start") &&
				classList.includes("animation-monk-end")
			);
		});
	});

	it("CSS class in greeting", () => {
		cy.clearLocalStorage();
		cy.visit("/");
		cy.get('#greeting').should('satisfy', ($el) => {
			const classList = Array.from($el[0].classList);
			return (
				classList.includes("animation-text-start") &&
				classList.includes("animation-text-end")
			);
		});
	});

	it("CSS class in salutation", () => {
		cy.clearLocalStorage();
		cy.visit("/");
		cy.get("#salutation").should("satisfy", ($el) => {
			const classList = Array.from($el[0].classList);
			return (
				classList.includes("animate-salutation-start") &&
				classList.includes("animate-salutation-end")
			);
		});
	});

	it("If @PresentationWasShown is equal true in localstorage", () => {
		cy.visit('/');
		console.log(localStorage.getItem("@PresentationWasShown"));
		setInterval(() => {
				expect(localStorage.getItem("@PresentationWasShown")).to.eq("true");	
		 }, 7500);
	});
});
