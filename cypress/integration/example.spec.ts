describe("Text example", () => {
	it("Has text", () => {
		cy.visit("/");
		cy.contains("Sejam bem vindos ao padrão Rafael Couto de códigos ReactJS.");
	});
});
