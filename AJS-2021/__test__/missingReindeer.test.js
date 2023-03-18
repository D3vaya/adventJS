import { missingReindeer } from "../14/missingReindeer.ts";
describe("Pruebas desafío 14", () => {
  it("Debe lanzar un error si el parámetro no viene", () => {
    expect(() => missingReindeer()).toThrowError();
  });
  it("Debe lanzar un error si el parámetro no es un arreglo", () => {
    expect(() => missingReindeer("ksks")).toThrowError();
  });

  it("Debe lanzar un error si los ids no estan entre el 0 y el 100", () => {
    expect(() => missingReindeer([1, 1000])).toThrowError();
  });
  it("Debe lanzar un error hay numeros repetidos", () => {
    expect(() => missingReindeer([1, 2, 2, 4])).toThrowError();
  });


  it("Debe lanzar un error el valor de retorno no es un numero", () => {
    const expected = missingReindeer([0, 2, 3]);
    expect(typeof expected !== "number").toBeFalsy();
  });

  it("Prueba éxitosa 1", () => {
    const expected = missingReindeer([0, 2, 3]);
    expect(expected).toEqual(1)
  });
  it("Prueba éxitosa 2", () => {
    const expected = missingReindeer([5, 6, 1, 2, 3, 7, 0])
    expect(expected).toEqual(4)
  });
  
});
