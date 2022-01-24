/// <reference types="cypress" />
import functions from "../functions";

describe("Check advice animate", () => {
	it("Test", () => {
		cy.clearLocalStorage();
		const { testHasClass } = functions;
		const array = [
			{
				title: "CSS class in advice component",
				id: "advice",
				cssClass: ["animation-advice-start", "animation-advice-end"],
			},
		];
		testHasClass("/", array, 6500);
	});

	it("If @PresentationWasShown is equal true in localstorage", () => {
		cy.visit("/");
		console.log(localStorage.getItem("@PresentationWasShown"));
		setInterval(() => {
			expect(localStorage.getItem("@PresentationWasShown")).to.eq("true");
		}, 7500);
	});
});
