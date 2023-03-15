export const isValidLetter = (letter: string) => {
  if(!letter) throw "undefined parameter";
  if(typeof letter !== 'string') throw "el parámetro debe ser string";
  

}