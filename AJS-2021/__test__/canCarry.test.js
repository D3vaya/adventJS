import { canCarry } from "../21/canCarry.ts";
describe("Pruebas desafío 21", () => {
  it("debe lanzar error si no vienen los parámetros", () => {
    expect(() => canCarry()).toThrowError();
  });
  it("debe lanzar error si el primer parámetro no es un número", () => {
    expect(() =>
      canCarry("2", [
        [23, 4, 5],
        [3, 6, 7],
      ])
    ).toThrowError();
  });
  it("debe lanzar error si el segundo parámetro no es un arreglo de arreglos", () => {
    expect(() =>
      canCarry(2, [
        '2',
        [3, 6, 7],
      ])
    ).toThrowError();
  });
  it("debe lanzar error si el segundo parámetro no es un arreglo de arreglos de numeros", () => {
    expect(() =>
      canCarry(2, [
        ['23', '4', '5'],
        ['3', '6', '7'],
      ])
    ).toThrowError();
  });
});

describe('Casos de prueba', () => {
  it('Caso 1', () => {
    const expected = canCarry(4, [[2, 5, 8], [3, 6, 10]]);
    expect(expected).toBeFalsy()
  });
  it('Caso 2', () => {
    const expected = canCarry(3, [[1, 1, 5], [2, 2, 10]])
    expect(expected).toBeTruthy()
  });
  it('Caso 3', () => {
    const expected = canCarry(3, [[2, 1, 5],[3, 5, 7]])
    expect(expected).toBeTruthy()
  });
  it('Caso 4', () => {
    const expected = canCarry(4, [[2, 3, 8],[2, 5, 7]])
    expect(expected).toBeTruthy()
  });
  it('Caso 5', () => {
    const expected = canCarry(1, [[2, 3, 8]])
    expect(expected).toBeFalsy()
  });
  it('Caso 6', () => {
    const expected = canCarry(2, [[1, 2, 4], [2, 3, 8]])
    expect(expected).toBeFalsy()
  });
});
