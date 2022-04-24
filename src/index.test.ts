import { ESLint } from "eslint";
import test from "tape";
import config from ".";

const isObject = (obj: unknown) => typeof obj === "object" && obj !== null;

test("Test basic properties", (t) => {
  const { parserOptions, rules } = config;
  t.ok(isObject(parserOptions));
  t.ok(isObject(rules));
  t.end();
});

test("Load config to validate all rule syntax is correct", (t) => {
  const linterInstance = new ESLint();
  linterInstance
    .lintText("var foo = 1;\nvar bar = () => {};\nbar(foo);\n")
    .then(([{ errorCount }]) => {
      t.equal(errorCount, 0);
      t.end();
    });
});
