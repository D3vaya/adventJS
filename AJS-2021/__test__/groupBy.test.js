import { groupBy } from "../09/groupBy.ts";
describe("Pruebas desafío 9", () => {
  it("debe arrojar error si no vienen ambos parámetros", () => {
    expect(() => groupBy()).toThrowError();
  });
  
});
