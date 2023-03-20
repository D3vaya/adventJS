import { countDecorations } from "../22/countDecorations.ts";
describe("Pruebas desafío 22", () => {
  it("Debe lanzar error si el parámetro no viene", () => {
    expect(() => countDecorations()).toThrowError();
  });
  it("Debe lanzar error si el parámetro no es un objecto", () => {
    expect(() => countDecorations(2)).toThrowError();
  });
  
});

describe("Casos de prueba", () => {
  it("Caso 1 ", () => {
    const tree = {
      value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
      left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
      },
      right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
      },
    };
    const expected = countDecorations(tree);
    expect(expected).toEqual(6);
  });
  it("Caso 2", () => {
    const bigTree = {
      value: 1,
      left: {
        value: 5,
        left: {
          value: 7,
          left: {
            value: 3,
            left: null,
            right: null,
          },
          right: null,
        },
        right: null,
      },
      right: {
        value: 6,
        left: {
          value: 5,
          left: null,
          right: null,
        },
        right: {
          value: 1,
          left: null,
          right: null,
        },
      },
    };
    const expected = countDecorations(bigTree);
    expect(expected).toEqual(28);
  });
});
