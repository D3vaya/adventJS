import { isValidLetter } from "../03/isValidLetter";
// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌

describe("Pruebas desafío numero 3", () => {
  it("debe lanzar error si falta el primer parámetro", () => {
    expect(() => isValidLetter()).toThrowError();
  });

  it("debe lanzar error si el parametro no es estring", () => {
    expect(() => isValidLetter(2)).toThrowError();
  });

  it("debe retornar false si contiene una { o [", () => {
    expect(isValidLetter("(a { bici (a)")).toEqual(false);
  });

  it("debe retornar false si existe un parentesis sin cerrar ", () => {
    expect(isValidLetter("(a bici (a)")).toEqual(false);
  });

  it("debe retornar false si existe un parentesis vacio ", () => {
    expect(isValidLetter("() bici muñeca")).toEqual(false);
  });

  it("debe retornar false si un parentesis no tiene apertura y cierre correcto ", () => {
    expect(isValidLetter(")bici( casa play")).toEqual(false);
  });
});
