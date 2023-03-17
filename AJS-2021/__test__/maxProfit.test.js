import { maxProfit } from "../08/maxProfit.ts";
describe("Pruebas desafío 8", () => {
  it("debe lanzar error si no viene el parámetro ", () => {
    expect(() => maxProfit()).toThrowError();
  });
  it("debe lanzar error si el parámetro no es un arreglo ", () => {
    expect(() => maxProfit("ws")).toThrowError();
  });
  it("debe retornar -1 si el dia no presenta ganancia", () => {
    expect(maxProfit([18, 15, 12, 11, 9, 7])).toEqual(-1);
  });
  it("debe retornar la ganancia del dia. Este dato debe ser numerico", () => {
    expect(maxProfit([39, 18, 29, 25, 34, 32, 5])).toEqual(16);
  });
});
