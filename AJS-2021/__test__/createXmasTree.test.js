import { createXmasTree, createTrunk } from "../04/createXmasTree";
describe("Pruebas desafío numero 4", () => {
  it("debe lanzar error si falta el parámetro", () => {
    expect(() => createXmasTree()).toThrowError();
  });
  it("debe lanzar error si el parámetro no es numerico", () => {
    expect(() => createXmasTree("2")).toThrowError();
  });
  it("debe lanzar error si el parámetro numerico es mayor a 100", () => {
    expect(createXmasTree(101)).toBeFalsy();
  });
  it("debe lanzar error si el parámetro numerico es menor a 1", () => {
    expect(createXmasTree(-3)).toEqual(false);
  });

});
