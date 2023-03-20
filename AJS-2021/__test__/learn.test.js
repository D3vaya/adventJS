import { learn } from "../19/learn.ts";
describe("Pruebas desafío 19", () => {
  it("debe lanzar error si no van los parámetros", () => {
    expect(() => learn()).toThrowError();
  });

  it("debe lanzar error si el primer parámetro no es un numero", () => {
    expect(() => learn("2", [])).toThrowError();
  });

  it("debe lanzar error si el segundo parámetro no es un arreglo", () => {
    expect(() => learn(1, 2)).toThrowError();
  });

  it("debe retornar [0, 0] si el segundo parámetro viene vacio", () => {
    const expected = learn(1, []);
    expect(expected).toEqual([0, 0]);
  });

  
});

describe("Casos de prueba", () => {
  it("caso 1", () => {
    const expected = learn(10, [2, 3, 8, 1, 4]);
    expect(expected).toEqual([0, 2]);
  });

  it("caso 2", () => {
    const expected = learn(15, [2, 10, 4, 1]);
    expect(expected).toEqual([1, 2]);
  });

  it("caso 3", () => {
    const expected = learn(25, [10, 15, 20, 5]);
    expect(expected).toEqual([0, 1]);
  });
  it("caso 4", () => {
    const expected = learn(8, [8, 2, 1]);
    expect(expected).toEqual([1, 2]);
  });
});
