export const pangram = (letter: string) => {
  if (typeof letter !== "string") throw "Error parameter";
  const normalizeLetter: string = normalize(
    letter.toLocaleLowerCase().replace(/[^a-zA-Z0-9ñÑ\s]/g, "")
  );
  return new Set(normalizeLetter).size === 28 ? true : false;
};

const normalize = (letter: string) => {
  letter.replace(/[áéíóúü]/gi, function (match) {
    switch (match.toLowerCase()) {
      case "á":
        return "a";
      case "é":
        return "e";
      case "í":
        return "i";
      case "ó":
        return "o";
      case "ú":
        return "u";
      case "ü":
        return "u";
      default:
        return match;
    }
  });
  return letter;
};



