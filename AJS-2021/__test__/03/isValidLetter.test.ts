import { isValidLetter } from '../../03/isValidLetter';

describe('Pruebas desafío numero 3', () => {
  it('should throw if first parameter is missing', () => {
    expect(() => isValidLetter()).toThrowError();
  });
  it('should throw if first parameter is not a string', () => {
    expect(() => isValidLetter(2)).toThrowError();
  });
});