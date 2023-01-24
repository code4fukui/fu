import * as t from "https://deno.land/std/testing/asserts.ts";
import fu from "./fu.js";

Deno.test("simple", () => {
  const a = [1, 2, 3];
  t.assert(fu.all(fu.all(n => typeof n == "number", a)));
});
