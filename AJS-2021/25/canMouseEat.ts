export const canMouseEat = (direction: string, game: string[][]) => {
  if (typeof direction !== "string") throw "direction is not a string";
  if (!Array.isArray(game)) throw "game is not a Array";

  const [empty, mouse, food] = [" ", "m", "*"];
  let r = false;
  for (let rows = 0; rows < game.length; rows++) {
    for (let columns = 0; columns < game.length; columns++) {
      if (game[rows][columns] === mouse) {
        console.log("[LOG] 🚧 ", { rows, columns, slot: game[rows][columns] });
        switch (direction) {
          case "up":
            console.log("up", game[rows - 1][columns]);
            if (game[rows - 1][columns] === food) {
              r = true;
              return true;
            }
            break;

          case "down":
            console.log("down", game[rows + 1][columns]);
            if (game[rows + 1][columns] === food) {
              r = true;
              return;
            }
            break;

          case "right":
            console.log("right", game[rows][columns + 1]);
            if (game[rows][columns + 1] === food) {
              r = true;
              return true;
            }
            break;

          case "left":
            console.log("left", game[rows][columns - 1]);
            if (game[rows][columns - 1] === food) {
              r = true;
              return true;
            }
            break;

          default:
            r = false;
            return false;
        }
      }
    }
  }
  console.log('[LOG] 🚧 ', {r})
  return r;
};

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

console.log({ expected: false, response: canMouseEat("up", room) }); // false
console.log({ expected: true, response: canMouseEat("down", room) }); // true
console.log({ expected: false, response: canMouseEat("right", room) }); // false
console.log({ expected: false, response: canMouseEat("left", room) }); // false

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

console.log({ expected: false, response: canMouseEat("up", room2) }); // false
console.log({ expected: false, response: canMouseEat("down", room2) }); // false
console.log({ expected: true, response: canMouseEat("right", room2) }); // true
console.log({ expected: false, response: canMouseEat("left", room2) }); // false

const room3 = [
  ["*", " ", " ", " ", " ", " "],
  ["*", " ", " ", " ", " ", " "],
  ["*", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", "*", "m"],
  [" ", " ", "*", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
];
