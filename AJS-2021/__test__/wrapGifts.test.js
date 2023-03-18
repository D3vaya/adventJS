import { wrapGifts } from "../13/wrapGifts.ts";
describe("Pruebas desafio 13", () => {
  it("debe lanzar error si el parámetro no eviene", () => {
    expect(() => wrapGifts()).toThrowError();
  });

  it("debe lanzar error si el parámetro no es un arreglo", () => {
    expect(() => wrapGifts("w")).toThrowError();
  });

  it("Si el arreglo de regalos esta vacío, retornar un arreglo vació", () => {
    expect(wrapGifts([])).toEqual([]);
  });

  it("Cada posición del arreglo debe tener la misma longitud", () => {
    const t = ["🏈🎸", "🎮🧸"];
    const expected = t[0].length !== t[1].length;
    expect(expected).toBeFalsy();
  });
  it("should ", () => {
    const expected = wrapGifts(["📷", "⚽️"]);
    expect(expected).toEqual(['****', '*📷*', '*⚽️*', '****'])
  });
});
