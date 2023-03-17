import { getMinJump } from "../12/getMinJump.ts";
describe("Pruebas desafío 12", () => {
  it("debe lanzar error si no viene el parámetro", () => {
    expect(() => getMinJump()).toThrowError();
  });
  it("debe lanzar error si el parámetro no es un arreglo", () => {
    expect(() => getMinJump(2)).toThrowError();
  });
  it("debe lanzar error si la posición 0 tiene un obstaculo. ", () => {
    expect(() => getMinJump([0, 3, 6, 7, 9])).toThrowError();
  });
  it("debe lanzar error si el retorno no es un numero. ", () => {
    const r = getMinJump([ 3, 6, 7, 9]);
    expect(typeof r).toEqual("number")
  });
});
