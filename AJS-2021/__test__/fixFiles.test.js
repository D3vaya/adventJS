import { fixFiles } from "../18/fixFiles.ts";
describe("Pruebas desafío 18", () => {
  it("Debe lanzar error si el parámetro no viene", () => {
    expect(() => fixFiles()).toThrowError();
  });

  it("Debe lanzar error si el arreglo viene vacio", () => {
    expect(() => fixFiles()).toThrowError();
  });

  it("Debe lanzar error si el parámetro no es un arreglo de strings", () => {
    expect(() => fixFiles([1, 2, 3])).toThrowError();
  });
});

describe("Casos de prueba", () => {
  it("Caso prueba 1", () => {
    const files = ["photo", "postcard", "photo", "photo", "video"];
    const expected = fixFiles(files);
    expect(expected).toEqual([
      "photo",
      "postcard",
      "photo(1)",
      "photo(2)",
      "video",
    ]);
  });
  it("Caso prueba 2", () => {
    const files2 = ["file", "file", "file", "game", "game"];
    const expected = fixFiles(files2);
    expect(expected).toEqual(["file", "file(1)", "file(2)", "game", "game(1)"]);
  });

  it("Caso prueba 3", () => {
    const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
    const expected = fixFiles(files3);
    expect(expected).toEqual([
      "file",
      "file(1)",
      "icon",
      "icon(1)",
      "icon(1)(1)",
    ]);
  });
});
