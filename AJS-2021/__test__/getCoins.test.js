import { getCoins } from "../10/getCoins.ts";
describe("Pruebas desafio 10", () => {
  it("debe lanzar error si no viene el parámetro", () => {
    expect(() => getCoins()).toThrowError();
  });
  it("debe lanzar error si el parámetro no es un número", () => {
    expect(() => getCoins('2')).toThrowError();
  });

  it("respuesta correcta EJ: 51", () => {
    expect(getCoins(51)).toEqual([1, 0, 0, 0, 0, 1])
  });

  it("respuesta correcta EJ: 3", () => {
    expect(getCoins(3)).toEqual([1, 1, 0, 0, 0, 0])
  });

});
