import {sumPairs} from "../06/sumPairs.ts";

describe('Pruebas challange 6', () => {
  it("debe lanzar error si faltan parámetros", () => {
    expect(() => sumPairs()).toThrowError();
  });

  it("debe lanzar error si el primer parametro no es un arreglo", () => {
    expect(() => sumPairs("s",10)).toThrowError();
  });

  it("debe retornar null si el primer parametro es un arreglo vacio", () => {
    expect(sumPairs([],10)).toBeNull()
  });

  it('debe retornar null si no encuentra la sumatoria correcta', () => {
    expect(sumPairs([-3, -2, 7, -5], 10)).toBeNull();
  });

});