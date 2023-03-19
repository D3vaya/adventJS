import { checkSledJump } from "../15/checkSledJump.ts";
describe("Pruebas desafío 15", () => {
  it("Debe lanzar error si el parámetro no viene", () => {
    expect(() => checkSledJump()).toThrowError();
  });

  it("Debe lanzar error si el parámetro no es un arreglo", () => {
    expect(() => checkSledJump(2)).toThrowError();
  });

  it("Debe retornar false si el arreglo esta vacío", () => {
    expect(checkSledJump([])).toBeFalsy()
  });

  it("Debe lanzar error si el parámetro no es un arreglo de números", () => {
    expect(() => checkSledJump(["1", "2", "3"])).toThrowError();
  });

  it("Debe lanzar error si el arreglo tiene menos de 3 posiciones", () => {
    expect(() => checkSledJump([1, 2])).toThrowError();
  });
});

describe("Casos de prueba", () => {
  it("Caso de prueba 1", () => {
    expect(checkSledJump([1, 2, 3, 2, 1])).toBeTruthy();
  });

  it("Caso de prueba 2", () => {
    expect(checkSledJump([0, 1, 0])).toBeTruthy();
  });

  it("Caso de prueba 3", () => {
    expect(checkSledJump([0, 3, 2, 1])).toBeTruthy();
  });

  it("Caso de prueba 4", () => {
    expect(checkSledJump([2, 4, 4, 6, 2])).toBeFalsy();
  });
  it("Caso de prueba 5", () => {
    expect(checkSledJump([1, 2, 3, 2, 1, 2, 3])).toBeFalsy();
  });
});
