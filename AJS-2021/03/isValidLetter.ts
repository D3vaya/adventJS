export const isValidLetter = (letter: string) => {
  if (!letter) throw "undefined parameter";
  if (typeof letter !== "string") throw "el parámetro debe ser string";

  const REGEX_NOT_KEYANDBRACKETS = /^[^\[\]\{\}]*$/g;
  const REGEX_CLOSED_PARENTHESES =/^([^\(\)]*|\(([^()]|\([^\(\)]*\))*\))*$/;
  if (!REGEX_NOT_KEYANDBRACKETS.test(letter)) return false;
  if (letter.replace(/\s+/g, "").includes("()")) return false;
  if (!REGEX_CLOSED_PARENTHESES.test(letter)) return false;

  const arrParentheses = letter
    .replace(/\s+/g, "")
    .split("")
    .filter((l) => l === "(" || l === ")");

  let open = 0;
  let close = 0;

  arrParentheses.forEach((p) => {
    if (p === "(") open++;
    if (p === ")") close++;
  });

  return open === close;
};

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌
// "bici (balón bici coche" // ❌
// "(a) (b) (c)" // ✅
export const letters = [
  "bici coche (balón) bici coche peluche",
  "(muñeca) consola bici",
  "bici coche (balón bici coche",
  "peluche (bici [coche) bici coche balón",
  "(peluche {) bici",
  "() bici",
  "bici (balón bici coche",
  "(a) (b) (c)",
  "(a() bici (a)",
  ")bici( casa play",
];

letters.forEach((letter) => {
  isValidLetter(letter);
});
