import { shouldBuyFidelity } from "../11/shouldBuyFidelity.ts";
describe("Pruebas desafio 11", () => {
  it("debe lanzar error si el parámetro no va", () => {
    expect(() => shouldBuyFidelity()).toThrowError();
  });
  it("debe lanzar error si no es númerico", () => {
    expect(() => shouldBuyFidelity("2")).toThrowError();
  });

  it("debe responder true si conviene la tarjeta de fidelidad", () => {
    expect(shouldBuyFidelity(100)).toBeTruthy()
  });

});

