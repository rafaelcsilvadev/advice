/// <reference types="cypress" />
import functions from "../functions";

describe("Check presentation animate", () => {
	it("Test", () => {
		cy.clearLocalStorage();
		const { testHasClass } = functions;
		const array = [
			{
				title: "CSS class in monk image",
				id: "monk",
				cssClass: ["animation-monk-start", "animation-monk-end"],
			},
			{
				title: "CSS class in greeting",
				id: "greeting",
				cssClass: ["animation-text-start", "animation-text-end"],
			},
			{
				title: "CSS class in salutation",
				id: "salutation",
				cssClass: ["animation-salutation-start", "animation-salutation-end"],
			},
		];
		testHasClass("/", array, 0);
	});

	it("If @PresentationWasShown is equal true in localstorage", () => {
		cy.visit("/");
		console.log(localStorage.getItem("@PresentationWasShown"));
		setInterval(() => {
			expect(localStorage.getItem("@PresentationWasShown")).to.eq("true");
		}, 7500);
	});
});
