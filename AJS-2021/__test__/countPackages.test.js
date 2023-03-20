import { countPackages } from "../17/countPackages.ts";
describe("Pruebas desafío 17", () => {
  it("Debe lanzar error si los parámetros no vienen", () => {
    expect(() => countPackages()).toThrowError();
  });

  it("Debe lanzar error si el primer parámetro no es un arreglo", () => {
    expect(() => countPackages(1, "kjh")).toThrowError();
  });

  it("Debe lanzar error si el segundo parámetro no es un string", () => {
    const carriers = [
      ["dapelu", 5, ["midu", "jelowing"]],
      ["midu", 2, []],
      ["jelowing", 2, []],
    ];
    expect(() => countPackages(carriers, 2)).toThrowError();
  });

  it("Debe lanzar 0 si el arreglo de carriers viene vacio", () => {
    expect(countPackages([], "kjh")).toEqual(0);
  });
});

describe("Casos de prueba", () => {
  it("Caso de prueba 1", () => {
    const carriers = [
      ["dapelu", 5, ["midu", "jelowing"]],
      ["midu", 2, []],
      ["jelowing", 2, []],
    ];

    const expected = countPackages(carriers, "dapelu");
    expect(expected).toEqual(9);
  });

  it("Caso de prueba 2 ", () => {
    const carriers2 = [
      ["lolivier", 8, ["camila", "jesuspoleo"]],
      ["camila", 5, ["sergiomartinez", "conchaasensio"]],
      ["jesuspoleo", 4, []],
      ["sergiomartinez", 4, []],
      ["conchaasensio", 3, ["facundocapua", "faviola"]],
      ["facundocapua", 2, []],
      ["faviola", 1, []],
    ];

    const expected = countPackages(carriers2, "camila");
    expect(expected).toEqual(15);
  });
});
