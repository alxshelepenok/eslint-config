import eslint from "eslint";
import config from "index";
import test from "tape";

const isObject = (obj) => typeof obj === "object" && obj !== null;

test("Test basic properties", (t) => {
	t.ok(isObject(config.parserOptions));
	t.ok(isObject(config.rules));
	t.ok(Array.isArray(config.plugins));
	t.end();
});

test("Load config in eslint to validate all rule syntax is correct", (t) => {
	const CLIEngine = eslint.CLIEngine;

	const cli = new CLIEngine({
		useEslintrc: false,
		configFile: "eslintrc.json"
	});

	const code = "var foo = 1\nvar bar = function () {}\nbar(foo)\n";

	t.equal(cli.executeOnText(code).errorCount, 0);
	t.end();
});
