export const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];
export const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];
import { canMouseEat } from "../25/canMouseEat.ts";
describe("Pruebas desafío 25", () => {
  it("Debe lanzar error si no vienen los parámetros", () => {
    expect(() => canMouseEat()).toThrowError();
  });

  it("Debe lanzar error si el primer parámetro no es un string", () => {
    expect(() => canMouseEat(2, [])).toThrowError();
  });

  it("Debe lanzar error si el segundo parametro no es un array", () => {
    expect(() => canMouseEat("up", 2)).toThrowError();
  });
});

describe("Casos de prueba", () => {
  it("Caso UP", () => {
    expect(canMouseEat("up", room)).toBeFalsy();
  });
  it("Caso DOWN", () => {
    expect(canMouseEat("down", room)).toBeTruthy();
  });
  it("Caso RIGHT", () => {
    expect(canMouseEat("right", room)).toBeFalsy();
  });
  it("Caso LEFT", () => {
    expect(canMouseEat("left", room)).toBeFalsy();
  });

  it("Caso UP ROOM2", () => {
    expect(canMouseEat("up", room2)).toBeFalsy();
  });
  it("Caso DOWN ROOM2", () => {
    expect(canMouseEat("down", room2)).toBeFalsy();
  });
  it("Caso RIGHT ROOM2", () => {
    expect(canMouseEat("right", room2)).toBeTruthy();
  });
  it("Caso LEFT ROOM2", () => {
    expect(canMouseEat("left", room2)).toBeFalsy();
  });
});
