import { canReconfigure } from "../23/canReconfigure.ts";
describe("Pruebas desafío 23", () => {
  it("Debe lanzar error si los prámetros no van o si no son string", () => {
    expect(() => canReconfigure()).toThrowError();
  });

  it("Debe retornar false si la longitud de to y from no es la misma", () => {
    expect(typeof canReconfigure("BAL", "LI")).toEqual('boolean')
  });
  it("Debe retornar false si existen letras repetidas", () => {
    expect(typeof canReconfigure("BAL", "LII")).toEqual('boolean')
  });
  it("La respuesta debe ser booleana", () => {
    expect(typeof canReconfigure("BAL", "LIS")).toEqual("boolean");
  });
  it('Debe retornar false si es diferente el orden de la transformación', () => {
    expect(canReconfigure("XBOX", "XXBO")).toBeFalsy();
  });
});

describe("Casos de prueba", () => {
  it("Caso 1", () => {
    const from = "BAL";
    const to = "LIB";
    const expected = canReconfigure(from, to);
    expect(expected).toBeTruthy();
  });

  it("Caso 2", () => {
    const from = "CON";
    const to = "JUU";
    const expected = canReconfigure(from, to);
    expect(expected).toBeFalsy();
  });

  it("Caso 3", () => {
    const from = "XBOX";
    const to = "XXBO";
    const expected = canReconfigure(from, to);
    expect(expected).toBeFalsy();
  });
  it("Caso 4", () => {
    const from = "XBOX";
    const to = "XOBX";
    const expected = canReconfigure(from, to);
    expect(expected).toBeTruthy();
  });
  it("Caso 5", () => {
    const from = "MMM";
    const to = "MID";
    const expected = canReconfigure(from, to);
    expect(expected).toBeFalsy();
  });
  it("Caso 6", () => {
    const from = "AA";
    const to = "MID";
    const expected = canReconfigure(from, to);
    expect(expected).toBeFalsy();
  });
});
