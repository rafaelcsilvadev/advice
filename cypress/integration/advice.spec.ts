/// <reference types="cypress" />
import functions from "../functions";

describe("Check advice animate", () => {
	it("Test", () => {
		const { testHasClass } = functions;
		const array = [
			{
				title: "CSS class in advice",
				id: "advice",
				cssClass: ["animation-monk-end", "animation-advice-start"],
			},
		];
		testHasClass("/", array);
	});
});
