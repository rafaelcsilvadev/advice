import { expect } from "@jest/globals";
import Example from "../utils/functions/example";

test("Example test", () => {
	expect(Example.Example(1, 2)).toBe(3);
});
