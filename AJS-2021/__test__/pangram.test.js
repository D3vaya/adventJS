import { pangram } from "../20/pangram.ts";
describe("Pruebas desafío 20", () => {
  it("debe lanzar error si el parámetro no viene", () => {
    expect(() => pangram()).toThrowError();
  });
  it("debe lanzar error si el parámetro no es un string", () => {
    expect(() => pangram(3456789)).toThrowError();
  });
});

describe("Casos de prueba", () => {
  it("Caso 1", () => {
    const expected = pangram(
      "Extraño pan de col y kiwi se quemó bajo fugaz vaho"
    );
    expect(expected).toBeTruthy();
  });
  it("Caso 2", () => {
    const expected = pangram(
      "Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!"
    );
    expect(expected).toBeTruthy();
  });
  it("Caso 3", () => {
    const expected = pangram(
      "Esto es una frase larga pero no tiene todas las letras del abecedario"
    );
    expect(expected).toBeFalsy();
  });
  it("Caso 4", () => {
    const expected = pangram("De la a a la z, nos faltan letras");
    expect(expected).toBeFalsy();
  });
});
