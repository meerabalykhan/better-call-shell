import assert from "node:assert/strict";
import { test } from "node:test";

const productionUrl = process.env.TEST_URL;

test("project metadata names Better Call Shell", async () => {
  const pkg = await import("../package.json", { with: { type: "json" } });
  assert.equal(pkg.default.name, "better-call-shell");
});

test("deployed page exposes the product promise", { skip: !productionUrl }, async () => {
  const response = await fetch(productionUrl);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Better Call Shell/i);
  assert.match(html, /pull request/i);
  assert.match(html, /remain maintainable/i);
});
