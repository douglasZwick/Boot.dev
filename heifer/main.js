import { moo } from "./moo.js";
import { say } from "./node_modules/cowsay/index.js";

const NAME = "Nuan Nuan";

console.log(say({
  text: moo(NAME),
  e: ".o",
}));
