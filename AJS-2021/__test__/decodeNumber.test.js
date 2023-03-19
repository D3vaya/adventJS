import { decodeNumber } from "../16/decodeNumber.ts";
describe("Pruebas desafío 16", () => {
  it("Debe lanzar error si el parámetro no viene", () => {
    expect(() => decodeNumber()).toThrowError();
  });
  it("Debe lanzar error si el parámetro no es string", () => {
    expect(() => decodeNumber(2)).toThrowError();
  });

  it("Debe retornar NaN si e simbolo no esta identificado", () => {
    const expected = decodeNumber(";.W");
    expect(expected).toBeNaN();
  });
});

describe("Casos de prueba", () => {
  it("Prueba 1  | ... -> 3", () => {
    expect(decodeNumber("...")).toEqual(3);
  });
  it("Prueba 2  | ., -> 4", () => {
    expect(decodeNumber(".,")).toEqual(4);
  });
  it("Prueba 3  | ,. -> 6", () => {
    expect(decodeNumber(",.")).toEqual(6);
  });
  it("Prueba 4  | ,... -> 8", () => {
    expect(decodeNumber(",...")).toEqual(8);
  });
  it("Prueba 5  | .........! -> 107", () => {
    expect(decodeNumber(".........!")).toEqual(107);
  });
  it("Prueba 6  | .; -> 49", () => {
    expect(decodeNumber(".;")).toEqual(49);
  });
  it("Prueba 7  | .., -> 5", () => {
    expect(decodeNumber("..,")).toEqual(5);
  });
  it("Prueba 8  | ..,! -> 95", () => {
    expect(decodeNumber("..,!")).toEqual(95);
  });
  it("Prueba 9  | .;! -> 49", () => {
    expect(decodeNumber(".;!")).toEqual(49);
  });
  it("Prueba 11 | !!! -> 300", () => {
    expect(decodeNumber("!!!")).toEqual(300);
  });
  it("Prueba 12 | ;! -> 50", () => {
    expect(decodeNumber(";!")).toEqual(50);
  });
  it("Prueba 12 | ;.W -> NaN", () => {
    expect(decodeNumber(";.W")).toBeNaN();
  });
});
