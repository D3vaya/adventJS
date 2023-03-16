import { daysToXmas } from "../05/daysToXmas.ts";
describe("Pruebas challange 5", () => {
  it("debe lanzar error si el parametro no viene", () => {
    expect(() => daysToXmas()).toThrowError();
  });
  it("debe lanzar error si el parametro no es una fecha", () => {
    expect(() => daysToXmas(2)).toThrowError();
  });
  it("debe retoranar un numero negativo si la fecha ya paso ", () => {
    expect(daysToXmas(new Date("Dec 26, 2021"))).toEqual(-1);
  });
});
