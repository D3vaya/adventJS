import { contains } from "../07/contains.ts";
describe("Pruebas desafío numero 7", () => {
  it("debe lanzar un error si faltan los parámetros", () => {
    expect(() => contains()).toThrowError();
  });
  it("debe lanzar un error si el primer parámetro no es un objeto", () => {
    expect(() => contains("almacen", "fanta")).toThrowError();
  });

  it("debe lanzar un error si el segundo parámetro no es un string", () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
    };
    expect(() => contains(almacen, ["fanta"])).toThrowError();
  });

  it("debe retornar true si encuentra el string en algun valor del objeto", () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
    };
    expect(contains(almacen, "fanta")).toEqual(true);
  });

  it("debe retornar false si no encuentra el string en algun valor del objeto", () => {
    const almacen = {
      estanteria1: {
        cajon1: {
          producto1: "coca-cola",
          producto2: "fanta",
          producto3: "sprite",
        },
      },
    };
    expect(contains(almacen, "cuatro")).toEqual(false);
  });

});
