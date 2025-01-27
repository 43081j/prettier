"use strict";

const prettier = require("prettier-local");
const generateSchema = require("../../../scripts/utils/generate-schema");

test("schema", () => {
  expect(generateSchema(prettier.getSupportInfo().options)).toMatchSnapshot();
});
