import { checkIsSameTree } from "../24/checkIsSameTree";
describe("Pruebas desafío 24", () => {
  it("Debe lanzar error si el primer parámetro no viene", () => {
    expect(() => checkIsSameTree()).toThrowError();
  });
  it("Debe lanzar error si el segundo parámetro no viene", () => {
    expect(() => checkIsSameTree()).toThrowError();
  });
});

describe("Casos de prueba", () => {
  it("Caso 1", () => {
    const tree = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null },
    };

    const expected = checkIsSameTree(tree, tree);
    expect(expected).toBeTruthy();
  });
  it("Caso 2", () => {
    const tree2 = {
      value: 1,
      left: {
        value: 3,
        left: { value: 2, left: null, right: null },
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: { value: 4, left: null, right: null },
      },
    };

    const expected = checkIsSameTree(tree2, tree2);
    expect(expected).toBeTruthy();
  });

  it("Caso 3", () => {
    const tree = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null },
    };
    const tree2 = {
      value: 1,
      left: {
        value: 3,
        left: { value: 2, left: null, right: null },
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: { value: 4, left: null, right: null },
      },
    };

    const expected = checkIsSameTree(tree, tree2);
    expect(expected).toBeFalsy();
  });
});
