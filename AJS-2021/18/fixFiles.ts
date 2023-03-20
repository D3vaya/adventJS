export const fixFiles = (files: string[]) => {
  if (!files) throw "undefiend parameter";
  if (!Array.isArray(files)) throw "parameter is not a array";
  if (files.length === 0) throw "is empty array";
  if (typeof files[0] !== "string") throw "array is not a string array";

  const response: string[] = [];
  const map: Map<string, number> = new Map(files.map((f) => [f, 0]));
  
  for (let index = 0; index < files.length; index++) {
    const counter = map.get(files[index])!;
    if (counter > 0) {
      response.push(`${files[index]}(${counter + 1 - 1})`);
      map.set(files[index], counter + 1);
    } else {
      response.push(files[index]);
      map.set(files[index], counter + 1);
    }
  }

  return response;
};

const files = ["photo", "postcard", "photo", "photo", "video"];
console.log("[LOG] 🚧 RESPONSE", fixFiles(files));
